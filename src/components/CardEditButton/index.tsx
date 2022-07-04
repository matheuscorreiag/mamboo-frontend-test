import React, { useState } from "react";
import { CloseEditIcon, Container, EditIcon } from "./styles";

export const CardEditButton: React.FC<{ cardId: string }> = ({ cardId }) => {
  // const dispatch = useDispatch();
  // const { isEditing } = useSelector((state: any) => state.card);

  const [isEditing, setIsEditing] = useState(false);

  const toggleIsEditing = () => {
    setIsEditing(!isEditing);
    // dispatch(actions.isEditing(1));
  };

  return (
    <Container>
      <EditIcon editing={isEditing} onClick={toggleIsEditing} />
      <CloseEditIcon editing={isEditing} onClick={toggleIsEditing} />
    </Container>
  );
};
