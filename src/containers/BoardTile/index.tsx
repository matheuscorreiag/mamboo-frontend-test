import React from 'react';
import { BoardTitle } from '../../components/BoardTitle';
import { Card } from '../Card';

import { Container } from './styles';

export const BoardTile: React.FC = () => {
  return (
    <Container>
      <BoardTitle/>
      <Card/>
      <Card/>
    </Container>
  );
};
