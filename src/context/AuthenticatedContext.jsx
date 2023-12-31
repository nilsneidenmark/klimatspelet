import { createContext, useContext, useState } from "react";

// Creates a new context
const AuthenticatedContext = createContext();

// Creates a provider component
export const AuthenticatedContextProvider = ({ children }) => {
  // Context is used for managing logged in / logged out status.
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <AuthenticatedContext.Provider value={{ authenticated, setAuthenticated }}>
      {children}
    </AuthenticatedContext.Provider>
  );
};

// Custom hook to use the context
export const useAuthenticated = () => {
  const context = useContext(AuthenticatedContext);

  return context;
};
