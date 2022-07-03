import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-bottom: 40px;

  border-radius: 14px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  max-height: 800px;
`;
export const CardsContainer = styled.div`
  height: 100%;

  display: grid;
  gap: 10px;

  overflow-y: scroll;
`;

export const BoardHeaderContainer = styled.div`
  margin: 10px 0px;
`;
export const BoardFooterContainer = styled.div`
  position: absolute;
  bottom: 10px;

  width: 100%;
`;
