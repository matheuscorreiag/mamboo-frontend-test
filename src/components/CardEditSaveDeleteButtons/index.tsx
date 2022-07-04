import React from "react";

import { Container, DeleteCardButton, SaveEditButton } from "./styles";

interface CardEditSaveDeleteButtonsProps {
  onDeleteCard: () => void;
  onSaveEdit: () => void;
}

export const CardEditSaveDeleteButtons: React.FC<
  CardEditSaveDeleteButtonsProps
> = ({ onDeleteCard, onSaveEdit }) => {
  return (
    <Container>
      <SaveEditButton onClick={() => onSaveEdit()}>Save</SaveEditButton>
      <DeleteCardButton onClick={() => onDeleteCard()}>Delete</DeleteCardButton>
    </Container>
  );
};
