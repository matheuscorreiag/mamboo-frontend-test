import React, { useEffect, useState } from "react";
import { CardEdition } from "../../containers/CardEdition";

import { Description } from "./styles";

interface CardDescriptionProps {
  description: string;
  isEditing: boolean;
  cardId: string;
  onSaveOrDelete: () => any;
}
export const CardDescription: React.FC<CardDescriptionProps> = ({
  description,
  isEditing,
  cardId,
  onSaveOrDelete,
}) => {
  const [editing, setIsEditing] = useState(isEditing);

  useEffect(() => {
    setIsEditing(isEditing);
  }, [isEditing]);

  const handleSaveOrDelete = () => {
    setIsEditing(false);
    onSaveOrDelete();
  };

  return (
    <>
      <Description isEditing={editing}>{description}</Description>

      {editing && (
        <>
          <CardEdition cardId={cardId} onSaveOrDelete={handleSaveOrDelete} />
        </>
      )}
    </>
  );
};
