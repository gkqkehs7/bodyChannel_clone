import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import {
  Container,
  InContainer,
  ImgContainer,
  Menu,
  MenuItem,
  DropDownMenuContainer,
  DropDown,
  DropDownMenu,
  DropDownMenuItems,
  DropDownMenuItem,
} from './styles';

function Header() {
  const [style, setStyle] = useState({ display: 'none' });
  const isMobile = useMediaQuery({ query: `(max-width:750px)` });

  const test = (e: any) => {
    setStyle({ display: 'block' });
  };

  const test2 = (e: any) => {
    setStyle({ display: 'none' });
  };

  return (
    <Container>
      <InContainer>
        <ImgContainer href="/">
          <img src="img/top_logo.png" />
        </ImgContainer>
        <Menu onMouseOver={test} onMouseLeave={test2}>
          <MenuItem className="test">
            <a className="after">바디채널</a>
          </MenuItem>
          <MenuItem>
            <a>지점찾기</a>
          </MenuItem>
          <MenuItem>
            <a>프로그램</a>
          </MenuItem>
          <MenuItem>
            <a>온라인결제</a>
          </MenuItem>
          <MenuItem>
            <a>창업문의</a>
          </MenuItem>
          <MenuItem>
            <a>아카데미</a>
          </MenuItem>
        </Menu>
      </InContainer>

      <DropDown style={style} onMouseOver={test} onMouseLeave={test2}>
        <DropDownMenuContainer>
          <DropDownMenu>
            <DropDownMenuItems>
              <DropDownMenuItem>
                <a>CONCEPT</a>
              </DropDownMenuItem>
              <DropDownMenuItem>
                <a>NEWS</a>
              </DropDownMenuItem>
              <DropDownMenuItem>
                <a>보도자료</a>
              </DropDownMenuItem>
            </DropDownMenuItems>

            <DropDownMenuItems></DropDownMenuItems>

            <DropDownMenuItems>
              <DropDownMenuItem>
                <a>HEALTH</a>
              </DropDownMenuItem>
              <DropDownMenuItem>
                <a>Group P.T</a>
              </DropDownMenuItem>
              <DropDownMenuItem>
                <a>퍼스널트레이닝</a>
              </DropDownMenuItem>
              <DropDownMenuItem>
                <a>GROUP EXERCISE</a>
              </DropDownMenuItem>
              <DropDownMenuItem>
                <a>주간훈련일정표</a>
              </DropDownMenuItem>
            </DropDownMenuItems>

            <DropDownMenuItems>
              <DropDownMenuItem>
                <a>회원권결제</a>
              </DropDownMenuItem>
              <DropDownMenuItem>
                <a>마이페이지</a>
              </DropDownMenuItem>
            </DropDownMenuItems>

            <DropDownMenuItems>
              <DropDownMenuItem>
                <a>창업문의</a>
              </DropDownMenuItem>
              <DropDownMenuItem>
                <a>성공사례</a>
              </DropDownMenuItem>
            </DropDownMenuItems>

            <DropDownMenuItems>
              <DropDownMenuItem>
                <a>아카데미 소개</a>
              </DropDownMenuItem>
              <DropDownMenuItem>
                <a>바디채널스토리</a>
              </DropDownMenuItem>
              <DropDownMenuItem>
                <a>채용안내</a>
              </DropDownMenuItem>
            </DropDownMenuItems>
          </DropDownMenu>
        </DropDownMenuContainer>
      </DropDown>
    </Container>
  );
}

export default Header;
