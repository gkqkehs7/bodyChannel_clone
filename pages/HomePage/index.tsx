import React from 'react';

import Header from '@components/common/Header';
import { Container, MainImg } from './styles';

function HomePage() {
  return (
    <Container>
      <Header />
      <MainImg src="img/main_1.jpg" style={{ width: '100vw', height: '100vh' }} />
    </Container>
  );
}

export default HomePage;
