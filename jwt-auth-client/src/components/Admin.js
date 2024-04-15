import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

const Admin = () => {
  const { user } = useContext(AuthContext);

  if (user?.roles.includes('ROLE_ADMIN')) {
    return <h2>Admin Page - Protected Access</h2>;
  } else {
    return <h2>Unauthorized Access</h2>;
  }
};




export default Admin;
