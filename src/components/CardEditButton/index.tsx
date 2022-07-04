import React from "react";
import { CloseEditIcon, Container, EditIcon } from "./styles";

export const CardEditButton: React.FC<{ cardId: string }> = ({ cardId }) => {
  // const dispatch = useDispatch();
  // const { isEditing } = useSelector((state: any) => state.card);

  const handleClick = () => {
    // dispatch(actions.isEditing(1));
  };

  return (
    <Container onClick={handleClick}>
      <EditIcon editing={false} />
      <CloseEditIcon editing={true} />
    </Container>
  );
};
