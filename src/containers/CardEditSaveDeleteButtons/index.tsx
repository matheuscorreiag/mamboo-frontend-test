import React from "react";
import { SaveButton } from "../../components/SaveButton";
import { DeleteButton } from "../../components/DeleteButton";

import { Container } from "./styles";

interface CardEditSaveDeleteButtonsProps {
  onDeleteCard: () => void;
  onSaveEdit: () => void;
}

export const CardEditSaveDeleteButtons: React.FC<
  CardEditSaveDeleteButtonsProps
> = ({ onDeleteCard, onSaveEdit }) => {
  return (
    <Container>
      <SaveButton onSave={onSaveEdit} />
      <DeleteButton onDelete={onDeleteCard} />
    </Container>
  );
};
