import React from "react";
import { createContext, useState } from "react";

export const ThemeContext = createContext({});

const ThemeProvider = ({ children }) => {
  const [primary, setPrimary] = useState("#f3e6d8");
  const [secondary, setSecondary] = useState("#c1c0ec");
  const [accent, setAccent] = useState("#34abad");
  return (
    <ThemeContext.Provider
      value={{
        primary,
        setPrimary,
        secondary,
        setSecondary,
        setPrimary,
        accent,
        setAccent,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
