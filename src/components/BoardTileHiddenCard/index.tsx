import React, { useState } from "react";

import { Container } from "./styles";

export interface BoardTileHiddenCardProps {
  isCreating: boolean;
}

export interface CreateCardProps {
  description: string;
  status: string;
}

export const BoardTileHiddenCard: React.FC<BoardTileHiddenCardProps> = ({
  isCreating,
}) => {
  const [data, setData] = useState<CreateCardProps>({
    description: "",
    status: "",
  });
  return (
    <Container isCreating={isCreating}>
      <h1>{data.description}</h1>
    </Container>
  );
};
