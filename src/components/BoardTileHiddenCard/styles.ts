import styled from "styled-components";
import { BoardTileHiddenCardProps } from ".";

export const Container = styled.div<BoardTileHiddenCardProps>`
  display: ${(props) => (props.isCreating ? "flex" : "none")};
  height: 100px;
  background-color: "#fff";
  width: 100%;
`;
