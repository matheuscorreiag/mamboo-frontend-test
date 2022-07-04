import React from "react";
import { CardEditSaveDeleteButtons } from "../CardEditSaveButton";

import { CardEditTextArea, Container } from "./styles";

export const CardEdition: React.FC = () => {
  return (
    <Container>
      <CardEditTextArea />
      <CardEditSaveDeleteButtons />
    </Container>
  );
};
