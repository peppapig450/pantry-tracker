import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Button, Typography } from "@mui/material";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../firebase";
import EmailPasswordForm from "./EmailPasswordForm";
import AuthForm from "./AuthForm";

const SignInForm = ({ theme }) => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = async (event) => {
    event.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/pantry");
    } catch (error) {
      let errorMessage = "An error occured. Please try again.";
      switch (error.code) {
        case "auth/invalid-email":
          errorMessage = "Invalid email address.";
          break;
        case "auth/wrong-password":
          errorMessage = "Incorrect password.";
          break;
        case "auth/user-not-found":
          errorMessage = "No user found with this email.";
          break;
        default:
          errorMessage =
            "Failed to sign in. Please check your credentials and try again.";
      }
      setError(errorMessage);
    }
  };

  // TODO: maybe move into the EmailPasswordForm
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();

    try {
      await signInWithPopup(auth, provider);
      router.push("/pantry");
    } catch (error) {
      setError("Failed to sign in with Google. Please try again.");
    }
  };

  return (
    <AuthForm
      title="Sign In"
      handleSubmit={handleSignIn}
      handleSocialAuth={handleGoogleSignIn}
      socialAuthText="Sign In with Google"
      switchAuthText="Don't have an account? Sign Up"
      handleSwitchAuth={handleSignUp}
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

export default SignInForm;
