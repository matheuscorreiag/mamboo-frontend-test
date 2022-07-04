import React from "react";
import { BoardTileCreateCard } from "../../components/BoardTileCreateCard";
import { BoardTileTitle } from "../../components/BoardTileTitle";
import { CardState } from "../../store/card/types";
import { Card } from "../Card";

import {
  BoardFooterContainer,
  BoardHeaderContainer,
  CardsContainer,
  Container,
} from "./styles";

interface BoardTileProps {
  title: string;
  tasks: CardState[];
}

export const BoardTile: React.FC<BoardTileProps> = ({ title, tasks }) => {
  return (
    <Container>
      <BoardHeaderContainer>
        <BoardTileTitle title={title} />
      </BoardHeaderContainer>
      <CardsContainer>
        {tasks &&
          tasks.map((task: CardState) => {
            return (
              <Card
                cardId={task.id}
                title={task.title}
                description={task.description}
                key={task.id}
              />
            );
          })}
      </CardsContainer>
      <BoardFooterContainer>
        <BoardTileCreateCard />
      </BoardFooterContainer>
    </Container>
  );
};
