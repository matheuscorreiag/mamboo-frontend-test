import styled from "styled-components";
import { BoardTileCreateCardButtonProps } from ".";

interface ContainerProps extends Partial<BoardTileCreateCardButtonProps> {}
export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-top: 10px;
  display: ${(props) => (props.isCreating ? "none" : "flex")};
`;
export const CreateCardLabel = styled.label`
  font-size: 0.9rem;
  cursor: pointer;
`;

export const CreateCardButton = styled.button<BoardTileCreateCardButtonProps>`
  cursor: pointer;
  border-radius: 14px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  :hover {
    outline: 1px solid #ccc;
    opacity: 0.8;
  }
  transition: all;
  transition-duration: 0.2s;
`;
