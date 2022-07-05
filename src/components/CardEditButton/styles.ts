import { Pencil, X } from "phosphor-react";
import styled from "styled-components";

interface EditButtonsProps {
  editing: boolean;
}
export const Container = styled.div`
  cursor: pointer;
  position: relative;
`;

export const EditIcon = styled(Pencil)<EditButtonsProps>`
  display: ${(props) => (props.editing ? "none" : "block")};
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 100;

  :hover {
    opacity: 0.5;
  }
`;
export const CloseEditIcon = styled(X)<EditButtonsProps>`
  display: ${(props) => (props.editing ? "block" : "none")};
  z-index: 100;
  right: 10px;
  top: 10px;

  position: absolute;
  :hover {
    opacity: 0.5;
  }
`;
