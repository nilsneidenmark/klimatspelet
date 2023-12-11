import React, { createContext, useContext, useState } from "react";

// Creates a new context
const SettingsContext = createContext();

// Creates a provider component
export const SettingsProvider = ({ children }) => {
  const [active, setActive] = useState({
    text: {
      font: { poppins: true, roboto: false },
      fontSize: { small: false, medium: true, large: false },
      space: { small: false, medium: true, large: false },
    },
  });

  return (
    <SettingsContext.Provider value={{ active, setActive }}>
      {children}
    </SettingsContext.Provider>
  );
};

// Custom hook to use the context
export const useSettings = () => {
  const context = useContext(SettingsContext);

  return context;
};
