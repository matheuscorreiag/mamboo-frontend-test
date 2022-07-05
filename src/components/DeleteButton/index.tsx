import React from "react";

import { DeleteButtonContainer } from "./styles";

interface DeleteButtonProps {
  onDelete: () => void;
}

export const DeleteButton: React.FC<DeleteButtonProps> = ({ onDelete }) => {
  return (
    <DeleteButtonContainer onClick={onDelete}>Delete</DeleteButtonContainer>
  );
};
