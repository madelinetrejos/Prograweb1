import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

const Moderator = () => {
  const { user } = useContext(AuthContext);

  if (user?.roles.includes('ROLE_MODERATOR')) {
    return <h2>Moderator Page - Protected Access</h2>;
  } else {
    return <h2>Unauthorized Access</h2>;
  }
};

export default Moderator;
