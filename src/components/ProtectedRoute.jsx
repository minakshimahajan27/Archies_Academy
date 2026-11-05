// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token'); // Ya jo bhi aap login ke waqt token/user save karti hain

  // Agar token nahi hai, toh login page par bhej do
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Agar token hai, toh dashboard open hone do
  return children;
};

export default ProtectedRoute;