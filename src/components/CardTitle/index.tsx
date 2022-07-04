import React from "react";
import { CardEditButton } from "../CardEditButton";
import { Container, Title } from "./styles";

interface CardTitleProps {
  cardId: string;
  title: string;
}

export const CardTitle: React.FC<CardTitleProps> = ({ cardId, title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <CardEditButton cardId={cardId} />
    </Container>
  );
};
