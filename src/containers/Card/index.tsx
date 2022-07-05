import React, { useState } from "react";
import { CardDescription } from "../../components/CardDescription";
import { CardEditButton } from "../../components/CardEditButton";

import { Container } from "./styles";

interface CardProps {
  cardId: string;
  description: string;
  status: string;
}

export const Card: React.FC<CardProps> = ({ cardId, description }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <Container isEditing={isEditing}>
      <CardEditButton
        handleIsEditing={() => setIsEditing(!isEditing)}
        isEditing={isEditing}
      />
      <CardDescription
        description={description}
        isEditing={isEditing}
        cardId={cardId}
        onSaveOrDelete={() => setIsEditing(false)}
      />
    </Container>
  );
};
