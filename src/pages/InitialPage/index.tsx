import React, { useContext, useEffect } from "react";
import { AnyAction } from "redux";
import { Board } from "../../containers/Board";
import { Header } from "../../containers/Header";
import ThemeContext from "../../context/ThemeContext";
import { useAppDispatch } from "../../hooks/redux";
import { fetchTasks } from "../../store/card/actions";
import GlobalStyle from "../../styles/themes/globalStyle";
import { AppContainer } from "./styles";

export const InitialPage: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchTasks() as unknown as AnyAction);
  }, []);

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
