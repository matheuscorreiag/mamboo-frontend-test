import React from "react";
import { CloseEditIcon, Container, EditIcon } from "./styles";

interface CardEditButtonProps {
  isEditing: boolean;
  handleIsEditing: () => void;
}

export const CardEditButton: React.FC<CardEditButtonProps> = ({
  isEditing,
  handleIsEditing,
}) => {
  const toggleIsEditing = () => {
    handleIsEditing();
  };

  return (
    <Container>
      <EditIcon $editing={isEditing} onClick={toggleIsEditing} />
      <CloseEditIcon $editing={isEditing} onClick={toggleIsEditing} />
    </Container>
  );
};
