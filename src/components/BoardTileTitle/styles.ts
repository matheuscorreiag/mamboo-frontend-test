import { Plus } from "phosphor-react";
import styled from "styled-components";

export const Title = styled.h2``;

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

export const PlusIcon = styled(Plus)`
  cursor: pointer;
  :hover {
    color: #00bcd4;
  }
`;
