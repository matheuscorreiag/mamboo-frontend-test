import React from "react";
import { CardDescription } from "../../components/CardDescription";
import { CardEditButton } from "../../components/CardEditButton";

import { Container } from "./styles";

interface CardProps {
  cardId: string;
  description: string;
  status: string;
}

export const Card: React.FC<CardProps> = ({ cardId, description }) => {
  return (
    <Container>
      <CardEditButton cardId={cardId} />
      <CardDescription description={description} />
    </Container>
  );
};
