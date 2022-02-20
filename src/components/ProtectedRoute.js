import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ loggedIn, children }) => {
  if (loggedIn){
    return children;
  }

  return <Navigate to='/sign-in' />
}

export default ProtectedRoute;