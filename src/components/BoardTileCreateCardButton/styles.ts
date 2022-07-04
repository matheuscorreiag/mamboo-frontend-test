import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-top: 10px;
`;
export const CreateCardLabel = styled.label`
  font-size: 0.9rem;
  cursor: pointer;
`;

export const CreateCardButton = styled.button`
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
