import { Plus } from "phosphor-react";
import React from "react";

import { Container, CreateCardButton, CreateCardLabel } from "./styles";

export interface BoardTileCreateCardButtonProps {
  onClick: () => void;
  isCreating: boolean;
}

export const BoardTileCreateCardButton: React.FC<
  BoardTileCreateCardButtonProps
> = ({ onClick, isCreating }) => {
  return (
    <Container isCreating={isCreating}>
      <CreateCardButton onClick={onClick} isCreating={isCreating}>
        <Plus />
        <CreateCardLabel>Add a new card</CreateCardLabel>
      </CreateCardButton>
    </Container>
  );
};
