import React from "react";
import { CardDescription } from "../../components/CardDescription";
import { CardTitle } from "../../components/CardTitle";

import { Container } from "./styles";

interface CardProps {
  cardId: string;
  title: string;
  description: string;
}

export const Card: React.FC<CardProps> = ({ cardId, title, description }) => {
  return (
    <Container>
      <CardTitle cardId={cardId} title={title} />
      <CardDescription description={description} />
    </Container>
  );
};
