import { ReactNode, useState } from "react";
import { darkTheme, lightTheme } from "../styles/themes";
import ThemeContext from "./ThemeContext";

const ThemeContextWrapper: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const changeCurrentTheme = (newTheme: "light" | "dark") => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const themeProp = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider
      value={{ currentTheme: theme, changeCurrentTheme, theme: themeProp }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextWrapper;
