import React, { useState } from "react";
import { AnyAction } from "redux";
import { useAppDispatch } from "../../hooks/redux";
import { fetchDeleteTask, fetchUpdateTask } from "../../store/card/actions";
import { CardEditSaveDeleteButtons } from "../../components/CardEditSaveDeleteButtons";

import { CardEditTextArea, Container } from "./styles";

interface CardEdition {
  cardId: string;
  onSaveOrDelete: () => void;
}

export const CardEdition: React.FC<CardEdition> = ({
  cardId,
  onSaveOrDelete,
}) => {
  const [description, setDescription] = useState("");

  const dispatch = useAppDispatch();
  const handleSaveEdit = () => {
    dispatch(
      fetchUpdateTask({ id: cardId, description }) as unknown as AnyAction
    );
    onSaveOrDelete();
  };
  const handleDeleteCard = () => {
    dispatch(fetchDeleteTask({ id: cardId }) as unknown as AnyAction);
    onSaveOrDelete();
  };

  return (
    <Container>
      <CardEditTextArea onChange={(e) => setDescription(e.target.value)} />
      <CardEditSaveDeleteButtons
        onSaveEdit={handleSaveEdit}
        onDeleteCard={handleDeleteCard}
      />
    </Container>
  );
};
