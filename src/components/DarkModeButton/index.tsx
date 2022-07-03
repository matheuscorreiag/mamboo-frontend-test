import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import { MoonIcon } from "./styles";

export const DarkModeButton: React.FC = () => {
  const { currentTheme, changeCurrentTheme } = useContext(ThemeContext);

  return (
    <MoonIcon
      onClick={() =>
        changeCurrentTheme(currentTheme === "light" ? "dark" : "light")
      }
    />
  );
};
