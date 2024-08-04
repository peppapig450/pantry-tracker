import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Box, Button, Typography, TextField } from "@mui/material";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../../firebase";
import EmailPasswordForm from "./EmailPasswordForm";
import AuthForm from "./AuthForm";

const SignUpForm = ({ theme }) => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async (event) => {
    event.preventDefault();

    if (password.length <= 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    // Additional password strength checks
    if (!/\d/.test(password)) {
      setError("Password must contain at least one number.");
    }
    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter.");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter.");
      return;
    }
    if (!/[!@#$%^&*]/.test(password)) {
      setError("Password must contain at least one special character.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/pantry"); // Redirect to pantry page after sign up
    } catch (error) {
      let errorMessage = "An error occured. Please try again.";
      switch (error.code) {
        case "auth/invalid-email":
          errorMessage = "Invalid email address.";
          break;
        case "auth/weak-password":
          errorMessage =
            "Password is too weak. Please choose a stronger password.";
          break;
        case "auth/email-already-in-use":
          errorMessage = "An account already exists with this email address.";
          break;
        default:
          errorMessage =
            "Failed to sign up. Please check yoru details and try again.";
      }
      setError(errorMessage);
    }
  };

  const handleSignIn = () => {
    router.push("/signin");
  };

  const handleGoogleSignUp = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      router.push("/pantry");
    } catch (error) {
      setError("Failed to sign up with Google. Please try again.");
    }
  };

  return (
    <AuthForm
      title="Sign Up"
      handleSubmit={handleSignUp}
      handleSocialAuth={handleGoogleSignUp}
      socialAuthText="Sign Up with Google"
      switchAuthText="Already have an account? Sign in"
      handleSwitchAuth={handleSignIn}
      error={error}
      theme={theme}
    >
      <EmailPasswordForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        error={error}
        theme={theme}
      />
    </AuthForm>
  );
};

export default SignUpForm;
