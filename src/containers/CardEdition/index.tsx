import React, { useState } from "react";
import { AnyAction } from "redux";
import { CardEditNewStatus } from "../../components/CardEditNewStatus";
import { useAppDispatch } from "../../hooks/redux";
import { fetchDeleteTask, fetchUpdateTask } from "../../store/card/actions";
import { CardEditSaveDeleteButtons } from "../CardEditSaveDeleteButtons";

import { CardEditTextArea, Container } from "./styles";

interface CardEdition {
  cardId: string;
  oldDescription: string;
  onSaveOrDelete: () => void;
}

export const CardEdition: React.FC<CardEdition> = ({
  cardId,
  onSaveOrDelete,
  oldDescription,
}) => {
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("PENDING");

  const dispatch = useAppDispatch();
  const handleSaveEdit = () => {
    dispatch(
      fetchUpdateTask({
        id: cardId,
        data: { description, status },
      }) as unknown as AnyAction
    );
    onSaveOrDelete();
  };
  const handleDeleteCard = () => {
    dispatch(fetchDeleteTask({ id: cardId }) as unknown as AnyAction);
    onSaveOrDelete();
  };

  const handleChangeStatus = (value: string) => {
    setStatus(value);
  };

  return (
    <Container>
      <CardEditTextArea
        onChange={(e) => setDescription(e.target.value)}
        defaultValue={oldDescription}
      />
      <CardEditNewStatus onChangeStatus={handleChangeStatus} />

      <CardEditSaveDeleteButtons
        onSaveEdit={handleSaveEdit}
        onDeleteCard={handleDeleteCard}
      />
    </Container>
  );
};
