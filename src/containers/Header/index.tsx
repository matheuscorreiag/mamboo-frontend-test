import React from "react";
import { HeaderLogo } from "../../components/HeaderLogo";

import { Container } from "./styles";

export const Header: React.FC = () => {
  return (
    <Container>
      <HeaderLogo />
    </Container>
  );
};
