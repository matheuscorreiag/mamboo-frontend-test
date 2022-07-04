import { Plus } from "phosphor-react";
import React from "react";

import { Container, CreateCardButton, CreateCardLabel } from "./styles";

interface BoardTileCreateCardButtonProps {
  onClick: () => void;
}

export const BoardTileCreateCardButton: React.FC<
  BoardTileCreateCardButtonProps
> = ({ onClick }) => {
  return (
    <Container onClick={onClick}>
      <CreateCardButton onClick={() => console.log("clicado")}>
        <Plus />
        <CreateCardLabel>Add a new card</CreateCardLabel>
      </CreateCardButton>
    </Container>
  );
};
