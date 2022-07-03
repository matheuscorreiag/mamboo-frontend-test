import React from "react";
import { BoardTileCreateCard } from "../../components/BoardTileCreateCard";
import { BoardTileTitle } from "../../components/BoardTileTitle";
import { Card } from "../Card";

import {
  BoardFooterContainer,
  BoardHeaderContainer,
  CardsContainer,
  Container,
} from "./styles";

interface BoardTileProps {
  title: string;
}

export const BoardTile: React.FC<BoardTileProps> = ({ title }) => {
  return (
    <Container>
      <BoardHeaderContainer>
        <BoardTileTitle title={title} />
      </BoardHeaderContainer>
      <CardsContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardsContainer>
      <BoardFooterContainer>
        <BoardTileCreateCard />
      </BoardFooterContainer>
    </Container>
  );
};
