import React, { useContext } from "react";
import { Board } from "../../containers/Board";
import { Header } from "../../containers/Header";
import ThemeContext from "../../context/ThemeContext";
import GlobalStyle from "../../styles/themes/globalStyle";

import { AppContainer } from "./styles";

export const App: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <GlobalStyle theme={theme} />
      <AppContainer theme={theme}>
        <Header />
        <Board />
      </AppContainer>
    </>
  );
};
