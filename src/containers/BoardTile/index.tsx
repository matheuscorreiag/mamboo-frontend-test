import React, { useState } from "react";
import { BoardTileCreateCardButton } from "../../components/BoardTileCreateCardButton";
import { BoardTileHiddenCard } from "../../components/BoardTileHiddenCard";
import { BoardTileTitle } from "../../components/BoardTileTitle";
import { CardState } from "../../store/card/types";
import { Card } from "../Card";

import { BoardHeaderContainer, CardsContainer, Container } from "./styles";

interface BoardTileProps {
  title: string;
  tasks: CardState[];
  status: string;
}

export const BoardTile: React.FC<BoardTileProps> = ({
  title,
  tasks,
  status,
}) => {
  const [isCreatingCard, setIsCreatingCard] = useState(false);
  const [key, setKey] = useState(0);

  const handleCreateCard = () => {
    setIsCreatingCard(true);
  };

  const handleCloseCreateCard = () => {
    setIsCreatingCard(false);
    setKey(key + 1);
  };

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
                description={task.description}
                key={task.id}
                status={task.status}
              />
            );
          })}
        <BoardTileHiddenCard
          isCreating={isCreatingCard}
          closeCard={handleCloseCreateCard}
          createCardType={status}
          key={key}
        />
      </CardsContainer>
      <BoardTileCreateCardButton
        onClick={handleCreateCard}
        isCreating={isCreatingCard}
      />
    </Container>
  );
};
