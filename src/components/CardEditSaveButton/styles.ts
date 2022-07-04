import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr;
`;
export const SaveEditButton = styled.button`
  background-color: #3ec762;

  border-radius: 8px;
  font-size: 12px;

  cursor: pointer;
  border: 0;
  outline: none;
  color: #fff;

  :hover {
    background-color: #16732e;
  }

  transition: all;
  transition-duration: 0.3s;
`;
export const DeleteCardButton = styled.button`
  background-color: red;
  border-radius: 8px;
  height: 30px;
  font-size: 12px;

  cursor: pointer;
  border: 0;
  outline: none;
  color: #fff;

  :hover {
    background-color: #6b0d0d;
  }

  transition: all;
  transition-duration: 0.3s;
`;
