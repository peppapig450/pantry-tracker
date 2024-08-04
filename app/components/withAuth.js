import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { Box, CircularProgress } from "@mui/material";

const withAuth = (Component) => {
  const AuthHOC = (props) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (!user) {
          router.push("/signin");
        } else {
          setLoading(false);
        }
      });

      return () => unsubscribe();
    }, [router]);

    if (loading) {
      return (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress />
        </Box>
      );
    }

    return <Component {...props} />;
  };

  // Add display name for higher-order component
  AuthHOC.displayName = `withAuth(${
    Component.displayName || Component.name || "Component"
  })`;

  return AuthHOC;
};

export default withAuth;
