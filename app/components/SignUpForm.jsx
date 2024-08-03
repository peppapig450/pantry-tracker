import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Box, Button, Typography, TextField } from "@mui/material";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../firebase";
import GoogleIcon from "@mui/icons-material/Google";

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
      // check for at least 1 digit
      setError("Password must contain at least one number.");
    }
    if (!/[a-z]/.test(password)) {
      // Check for at least one lowercase letter
      setError("Password must contain at least one lowercase letter.");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      // Check for at least one uppercase letter
      setError("Password must contain at least one uppercase letter.");
      return;
    }
    if (!/[!@#$%^&*]/.test(password)) {
      // Check for at least one special character
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
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="80vh"
      textAlign="center"
    >
      <Typography variant="h4" component={"h1"} gutterBottom>
        SignUp
      </Typography>
      <Box component="form" onSubmit={handleSignUp} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          InputLabelProps={{ style: { color: theme.palette.text.primary } }}
          InputProps={{
            style: { color: theme.palette.text.primary },
            sx: {
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: theme.palette.secondary.main,
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: theme.palette.text.primary,
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: theme.palette.text.primary,
              },
            },
          }}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="new-password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputLabelProps={{ style: { color: theme.palette.text.primary } }}
          InputProps={{
            style: { color: theme.palette.text.primary },
            sx: {
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: theme.palette.secondary.main,
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: theme.palette.text.primary,
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: theme.palette.text.primary,
              },
            },
          }}
        />
        {error && <Typography color="error">{error}</Typography>}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="secondary"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign Up
        </Button>
        <Button
          fullWidth
          variant="text"
          color="secondary"
          onClick={handleSignIn}
        >
          Already have an account? Sign In
        </Button>
        <Button
          fullWidth
          variant="contained"
          color="secondary"
          onClick={handleGoogleSignUp}
          sx={{ mt: 2 }}
          startIcon={<GoogleIcon />}
        >
          Sign Up with Google
        </Button>
      </Box>
    </Box>
  );
};

export default SignUpForm;
