import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.fontColor};
}
`;

export default GlobalStyle;
