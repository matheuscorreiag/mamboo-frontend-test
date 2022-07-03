import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5px;

  cursor: pointer;

  :hover {
    border: 1px solid #ccc;
    border-radius: 14px;
  }
  transition: all;
  transition-duration: 0.2s;
`;
export const CreateCardLabel = styled.label`
  font-size: 0.9rem;
  cursor: pointer;
`;
