import { X } from "phosphor-react";
import styled from "styled-components";
import { BoardTileHiddenCardProps } from ".";

export const Container = styled.div<BoardTileHiddenCardProps>`
  display: ${(props) => (props.isCreating ? "flex" : "none")};
  height: 150px;

  flex-direction: column;

  position: relative;
`;

export const CreateCardInput = styled.textarea`
  height: 100px;
  width: 180px;
  border-radius: 14px;
  outline: none;
  border: 0;
  color: #fff;
  background-color: #723bff;
  word-wrap: break-word;
`;
export const CloseIcon = styled(X)`
  position: absolute;
  right: 2px;
  top: 2px;
  color: #fff;

  cursor: pointer;
`;

export const SaveButtonContainer = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
