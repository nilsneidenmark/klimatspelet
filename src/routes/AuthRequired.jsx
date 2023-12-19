//import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuthenticated } from "../context/AuthenticatedContext";

// Component that renders protected routes if user is authenticated
export default function AuthRequired() {
  const { authenticated } = useAuthenticated();

  if (!authenticated) {
    return <Navigate to="/?authenticated=false" />;
  }
  return <Outlet />;
}
