import React from "react";

import { Container, DeleteCardButton, SaveEditButton } from "./styles";

export const CardEditSaveDeleteButtons: React.FC = () => {
  return (
    <Container>
      <SaveEditButton>Save</SaveEditButton>
      <DeleteCardButton>Delete</DeleteCardButton>
    </Container>
  );
};
