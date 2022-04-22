import React from "react";
import { Navigate, useLocation, Outlet } from "react-router-dom";
export const ProtectedRoute = ({ isAllowed, redirectPath = "/Login", children }) => {
  const location = useLocation();
  console.log("isAllowed",isAllowed)
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace state={{ from: location }} />;
  }

  return children ? children : <Outlet />;
};
