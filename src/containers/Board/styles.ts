import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  gap: 20px;
  margin: 20px 0px;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 25px;
  }
  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 50px;
    place-items: center;
  }
`;
