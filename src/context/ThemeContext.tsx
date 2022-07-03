import { createContext } from "react";
import { lightTheme } from "../styles/themes";

const defaultValue = {
  currentTheme: "light",
  changeCurrentTheme: (newTheme: "light" | "dark") => {},
  theme: lightTheme,
};

const ThemeContext = createContext(defaultValue);

export default ThemeContext;
