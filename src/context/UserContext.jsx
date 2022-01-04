import { createContext, useState } from 'react';

const UserContext = createContext();
const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  const login = (username, password) => {
    const loginSuccessful =
      username === process.env.AUTH_USERNAME &&
      password === process.env.AUTH_PASSWORD;
    if (loginSuccessful) setUser({ username });
    return loginSuccessful;
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
export { UserProvider, UserContext };
