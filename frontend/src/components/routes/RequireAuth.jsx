import React from "react";
import { Outlet, useLocation, Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useUserContext } from "../../contexts/userContext";
import AdminNavBar from "../AdminComponents/AdminNavBar/AdminNavBar";
import UserHome from "../UserComponents/UserHome/UserHome";

export default function RequireAuth({ allowedRoles }) {
  const { user } = useUserContext();
  const location = useLocation();

  function verifyUserRole() {
    if (user?.roles === "admin") {
      return (
        <>
          <AdminNavBar />
          <Outlet />
        </>
      );
    }
    return (
      <>
        <UserHome />
        <Outlet />
      </>
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
