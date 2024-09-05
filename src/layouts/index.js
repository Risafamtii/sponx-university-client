import React from "react";
import Navbar from "../components/Navbar";
import { Container } from "@mui/material";
import { useLocation } from "react-router-dom";

const MainLayout = ({ children }) => {
  const location = useLocation();
  const whiteListedPaths = ["/"];
  const isWhiteListedPath = whiteListedPaths.includes(location.pathname);

  return (
    <>
      {isWhiteListedPath && <Navbar />}
      <Container sx={{ mt: 5 }} maxWidth="xl">
        {children}
      </Container>
    </>
  );
};

export default MainLayout;
