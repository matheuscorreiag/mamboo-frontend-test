import styled from "styled-components";

interface CardProps {
  isEditing: boolean;
}

export const Container = styled.div<CardProps>`
  border-radius: 14px;
  width: 200px;
  height: ${(props) => (props.isEditing ? "250px" : "150px")};
  background-color: ${(props) => (props.isEditing ? "#723bff;" : "#531cb3")};

  transition: all;
  transition-duration: 0.3s;

  color: #fff;

  overflow-y: hidden;
`;
