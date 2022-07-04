import React from "react";
import { CardEdition } from "../CardEdition";

import { Description } from "./styles";

interface CardDescriptionProps {
  description: string;
  isEditing: boolean;
  cardId: string;
}
export const CardDescription: React.FC<CardDescriptionProps> = ({
  description,
  isEditing,
  cardId,
}) => {
  return (
    <>
      <Description isEditing={isEditing}>{description}</Description>

      {isEditing && (
        <>
          <CardEdition />
        </>
      )}
    </>
  );
};
