import { createContext, useContext, useState } from "react";

// Creates a new context
const DisplayLoginOrSignupContext = createContext();

// Creates a provider component
export const DisplayLoginOrSignupProvider = ({ children }) => {
  // Context is used for dynamically rendering different components
  const [display, setDisplay] = useState("intro");

  return (
    <DisplayLoginOrSignupContext.Provider value={{ display, setDisplay }}>
      {children}
    </DisplayLoginOrSignupContext.Provider>
  );
};

// Custom hook to use the context
export const useDisplay = () => {
  const context = useContext(DisplayLoginOrSignupContext);

  return context;
};
