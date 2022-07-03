import React from "react";

import { Container, Title } from "./styles";

interface BoardTitleProps {
  title: string;
}
export const BoardTileTitle: React.FC<BoardTitleProps> = ({ title }) => {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
};
