import React from 'react';
import { CardDescription } from '../../components/CardDescription';
import { CardTitle } from '../../components/CardTitle';

import { Container } from './styles';

export const Card: React.FC = () => {
  return (
    <Container>
      <CardTitle/>
      <CardDescription/>
    </Container>
  );
};
