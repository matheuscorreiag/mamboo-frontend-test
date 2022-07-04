import { Plus } from "phosphor-react";
import React from "react";

import { Container, CreateCardLabel } from "./styles";

interface BoardTileCreateCardButtonProps {
  onClick: () => void;
}

export const BoardTileCreateCardButton: React.FC<
  BoardTileCreateCardButtonProps
> = ({ onClick }) => {
  return (
    <Container onClick={onClick}>
      <Plus />
      <CreateCardLabel>Add a new card</CreateCardLabel>
    </Container>
  );
};
