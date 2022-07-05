import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import ThemeContextWrapper from "./context/ThemeContextWrapper";
import { InitialPage } from "./pages/InitialPage";
import { store } from "./store";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeContextWrapper>
    <Provider store={store}>
      <InitialPage />
    </Provider>
  </ThemeContextWrapper>
);
