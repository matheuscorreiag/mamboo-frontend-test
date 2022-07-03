import React from "react";
import { BoardTile } from "../BoardTile";

import { Container } from "./styles";

export const Board: React.FC = () => {
  return (
    <Container>
      <BoardTile title="Pending" />
      <BoardTile title="In Progress" />
      <BoardTile title="Review" />
      <BoardTile title="Done" />
    </Container>
  );
};
