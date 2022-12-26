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

  const logOut = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  const getUserName = () => {
    const { username } = JSON.parse(localStorage.getItem('user'));
    return username;
  };

  const getToken = () => {
    const userData = JSON.parse(localStorage.getItem('user'));
    const token = userData ? userData.token : '';
    return token;
  };

  return (
    <AuthContext.Provider value={{
      user,
      logIn,
      logOut,
      getToken,
      getUserName,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
