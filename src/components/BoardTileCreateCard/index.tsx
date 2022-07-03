import { Plus } from "phosphor-react";
import React from "react";

import { Container, CreateCardLabel } from "./styles";

export const BoardTileCreateCard: React.FC = () => {
  return (
    <Container>
      <Plus />
      <CreateCardLabel>Add a new card</CreateCardLabel>
    </Container>
  );
};
