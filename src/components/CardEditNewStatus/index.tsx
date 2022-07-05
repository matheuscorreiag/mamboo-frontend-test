import React from "react";
import { Container } from "../BoardTileCreateCardButton/styles";

import { OptionsValue, SelectNewStatus } from "./styles";

interface CardEditNewStatusProps {
  onChangeStatus: (value: string) => void;
}
export const CardEditNewStatus: React.FC<CardEditNewStatusProps> = ({
  onChangeStatus,
}) => {
  return (
    <Container>
      <SelectNewStatus onChange={(e) => onChangeStatus(e.target.value)}>
        <OptionsValue value={"PENDING"}> Pending </OptionsValue>
        <OptionsValue value={"IN_PROGRESS"}> In progress </OptionsValue>
        <OptionsValue value={"REVIEW"}> Review </OptionsValue>
        <OptionsValue value={"DONE"}> Done </OptionsValue>
      </SelectNewStatus>
    </Container>
  );
};
