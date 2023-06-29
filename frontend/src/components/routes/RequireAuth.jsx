import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useUserContext } from "../../contexts/userContext";
import Admin from "../AdminComponents/AdminNavBar/AdminNavBar";
import Home from "../../pages/Home/Home";

export default function RequireAuth({ allowedRoles }) {
  const { user } = useUserContext();
  const location = useLocation();

  function verifyUserRole() {
    if (user?.roles === "admin") {
      return (
        <div>
          <Admin />
        </div>
      );
    }
    return (
      <div>
        <Home />
      </div>
    );
  }

  return user?.roles === allowedRoles ? (
    verifyUserRole()
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

RequireAuth.propTypes = {
  allowedRoles: PropTypes.string.isRequired,
};
