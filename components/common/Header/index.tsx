import React from 'react';
import { Container, Menu, InContainer, MenuItem } from './styles';

function Header() {
  return (
    <Container>
      <InContainer style={{ display: 'flex', justifyContent: 'space-between' }}>
        <a href="/">
          <img src="img/top_logo.png" />
        </a>
        <Menu style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <MenuItem>바디채널</MenuItem>
          <MenuItem>지점찾기</MenuItem>
          <MenuItem>프로그램</MenuItem>
          <MenuItem>온라인결제</MenuItem>
          <MenuItem>창업문의</MenuItem>
          <MenuItem>아카데미</MenuItem>
        </Menu>
      </InContainer>
    </Container>
  );
}

export default Header;
