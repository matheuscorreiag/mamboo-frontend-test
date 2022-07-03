import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100%;
  padding: 20px 0px;

  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor};
`;
