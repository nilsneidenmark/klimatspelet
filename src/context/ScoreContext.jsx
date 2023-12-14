import { createContext, useContext, useState } from "react";

// Creates a new context
const ScoreContext = createContext();

// Creates a provider component
export const ScoreContextProvider = ({ children }) => {
  const [score, setScore] = useState(0);

  return (
    <ScoreContext.Provider value={{ score, setScore }}>
      {children}
    </ScoreContext.Provider>
  );
};

// Custom hook to use the context
export const useScore = () => {
  const context = useContext(ScoreContext);

  return context;
};
