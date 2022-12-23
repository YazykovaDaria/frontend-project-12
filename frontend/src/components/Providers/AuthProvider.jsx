/* eslint-disable react/jsx-no-constructed-context-values */
import { useState } from 'react';
import { AuthContext } from '../../context/context';

const AuthProvider = ({ children }) => {
  const savedUserData = JSON.parse(localStorage.getItem('user'));
  const currentUser = savedUserData ? { username: savedUserData.username } : null;

  const [user, setUser] = useState(currentUser);

  const logIn = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
    setUser({ username: userData.username });
  };

  const getToken = () => {
    const userData = JSON.parse(localStorage.getItem('user'));
    const token = userData ? userData.token : null;
    return token;
  };

  return (
    <AuthContext.Provider value={{
      user,
      logIn,
      getToken,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
