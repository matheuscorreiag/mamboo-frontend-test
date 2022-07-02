import React from "react";
import { BoardTile } from "../BoardTile";

import { Container } from "./styles";

export const Board: React.FC = () => {
  return (
    <Container>
      <BoardTile />
    </Container>
  );
};
