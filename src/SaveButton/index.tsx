import React from "react";

import { SaveButtonContainer } from "./styles";

interface SaveButtonProps {
  onSave: () => void;
}
export const SaveButton: React.FC<SaveButtonProps> = ({ onSave }) => {
  return (
    <SaveButtonContainer onClick={() => onSave()}>Save</SaveButtonContainer>
  );
};
