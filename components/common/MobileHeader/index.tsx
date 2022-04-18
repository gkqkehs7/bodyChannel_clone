import React, { useState } from 'react';
import { HiMenu } from 'react-icons/hi';

import { Container, ImgContainer, MenuContainer } from './styles';

function MobileHeader() {
  return (
    <Container>
      <ImgContainer href="/">
        <img src="img/top_logo.png" />
      </ImgContainer>

      <MenuContainer>
        <HiMenu size={35} />
      </MenuContainer>
    </Container>
  );
}

export default MobileHeader;
