import React from 'react';
import { useMediaQuery } from 'react-responsive';

import Header from '@components/common/Header';
import MobileHeader from '@components/common/MobileHeader';
import Benefits from '@components/Benefits';

import { Container, MainImg } from './styles';

function HomePage() {
  const isMobile = useMediaQuery({ query: '(max-width:750px)' });

  return (
    <Container>
      {isMobile ? <MobileHeader /> : <Header />}

      <MainImg src="img/main_1.jpg" style={{ width: '100%', height: '100%' }} />

      <Benefits />
    </Container>
  );
}

export default HomePage;
