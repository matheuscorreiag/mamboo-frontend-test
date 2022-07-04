import React from "react";
import { CardDescription } from "../../components/CardDescription";

import { Container } from "./styles";

interface CardProps {
  cardId: string;
  description: string;
  status: string;
}

export const Card: React.FC<CardProps> = ({ cardId, description }) => {
  return (
    <Container>
      <CardDescription description={description} />
    </Container>
  );
};
