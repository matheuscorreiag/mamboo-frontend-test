import styled from "styled-components";

interface Props {
  isEditing: boolean;
}
export const Description = styled.h2<Props>`
  display: ${(props) => (props.isEditing ? "none" : "block")};
  font-size: 13px;
  font-weight: 400;
  margin: 20px;
  word-wrap: break-word;
  height: 120px;
  overflow: scroll;

  ::-webkit-scrollbar {
    width: 0px;
  }
`;
