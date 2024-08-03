import React from "react";
import { Box, TextField, Typography } from "@mui/material";

const EmailPasswordForm = ({
  email,
  setEmail,
  password,
  setPassword,
  error,
  theme,
}) => (
  <Box>
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
      autoComplete="current-password"
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
  </Box>
);

export default EmailPasswordForm;
