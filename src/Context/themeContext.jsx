import React from "react";
import { createContext, useState } from "react";

export const ThemeContext = createContext({});

const ThemeProvider = ({ children }) => {
  const [primary, setPrimary] = useState("rgb(243, 230, 216)");
  const [secondary, setSecondary] = useState("rgb(193, 192, 236)");
  const [accent, setAccent] = useState("rgb(52, 171, 173)");
  const [isOpen, setIsOpen] = useState(false);
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
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
