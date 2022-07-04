import React from "react";

import { Description } from "./styles";

export const CardDescription: React.FC<{ description: string }> = ({
  description,
}) => {
  return <Description>{description}</Description>;
};
