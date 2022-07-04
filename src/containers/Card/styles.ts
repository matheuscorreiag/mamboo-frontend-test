import styled from "styled-components";

interface CardProps {
  isEditing: boolean;
}

export const Container = styled.div<CardProps>`
  border-radius: 14px;
  padding: 5px;
  width: 200px;
  height: 150px;
  background-color: ${(props) => (props.isEditing ? "#723bff;" : "#531cb3")};

  transition: all;
  transition-duration: 0.3s;
`;
