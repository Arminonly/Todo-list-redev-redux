import React from 'react';
import { Navigate } from 'react-router-dom';

const Protected = ({ children }) => {
  let auth = localStorage.getItem('My_token');
  
  if (!auth) {
    return <Navigate to="/registry" />;
  }
  return children;
};

export default Protected;
