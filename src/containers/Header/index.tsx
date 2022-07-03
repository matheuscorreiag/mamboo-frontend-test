import React from "react";
import { DarkModeButton } from "../../components/DarkModeButton";
import { HeaderLogo } from "../../components/HeaderLogo";

import { Container } from "./styles";

export const Header: React.FC = () => {
  return (
    <Container>
      <DarkModeButton />
      <HeaderLogo />
    </Container>
  );
};
