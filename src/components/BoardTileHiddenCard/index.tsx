import React, { useState } from "react";
import { AnyAction } from "redux";
import { useAppDispatch } from "../../hooks/redux";
import { fetchCreateTask } from "../../store/card/actions";
import { SaveButton } from "../SaveButton";

import {
  CloseIcon,
  Container,
  CreateCardInput,
  SaveButtonContainer,
} from "./styles";

export interface BoardTileHiddenCardProps {
  isCreating: boolean;
  closeCard: () => void;
  createCardType: string;
}

export interface CreateCardProps {
  description: string;
  status: string;
}

export const BoardTileHiddenCard: React.FC<BoardTileHiddenCardProps> = ({
  isCreating,
  closeCard,
  createCardType,
}) => {
  const dispatch = useAppDispatch();

  const initialState = {
    description: "",
    status: createCardType,
  };

  const [data, setData] = useState<CreateCardProps>({
    description: "",
    status: createCardType,
  });

  const clearState = () => {
    setData(initialState);
  };

  const handleSave = () => {
    dispatch(fetchCreateTask(data) as unknown as AnyAction);
    setTimeout(() => {
      clearState();
    }, 1000);
    closeCard();
  };

  return (
    <Container
      isCreating={isCreating}
      closeCard={closeCard}
      createCardType={createCardType}
    >
      <CloseIcon onClick={closeCard} />
      <CreateCardInput
        onChange={(e) => setData({ ...data, description: e.target.value })}
      />
      <SaveButtonContainer>
        <SaveButton onSave={handleSave} />
      </SaveButtonContainer>
    </Container>
  );
};
