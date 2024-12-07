import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
// import { decodeJWT, isTokenExpired } from "../utils/auth";

const AppRoutes = () => {
  const location = useLocation();
  const token = localStorage.getItem("token");

  // const decodedToken = decodeJWT(token);
  // const exp = decodedToken?.exp;

  // if (token && !isTokenExpired(exp) && location.pathname === "/login") {
  //   return <Navigate to="/" />;
  // } else if (token && isTokenExpired(exp)) {
  //   localStorage.clear();
  //   return <Navigate to="/login" />;
  // }

  return (
    <Routes location={location}>
      <Route path="/login" element={<LoginPage />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
