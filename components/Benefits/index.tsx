import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Container, Header, Body, ImgContainer } from './styles';

function Benefits() {
  const isMobile = useMediaQuery({ query: `(min-width:750px)` });

  return (
    <Container>
      <Header>
        <div style={{ fontSize: '2em', fontWeight: '500', color: ' #ff4C4C' }}>24HOUR / 7DAY 전지점 통합회원권</div>
        <div>Bodychannel is 24/7 open fitness club where you can use</div>
        <div style={{ marginBottom: '20px' }}>integrated membership of all branches anytime and anywere.</div>
      </Header>

      <Body>
        <div className="bug">
          <ImgContainer>
            <div className="flip">
              <div className="test">
                <img src="img/benefit_1.jpg" className="front" />
                <img src="img/benefit_front_1.png" style={{ position: 'absolute', top: 0 }} />
              </div>
              <div className="back">hi</div>
            </div>
          </ImgContainer>

          <ImgContainer>
            <div className="flip">
              <img src="img/benefit_2.jpg" className="front" />
              <div className="back">hi</div>
            </div>
          </ImgContainer>

          <ImgContainer>
            <div className="flip">
              <img src="img/benefit_3.jpg" className="front" />
              <div className="back">hi</div>
            </div>
          </ImgContainer>

          <ImgContainer>
            <div className="flip">
              <img src="img/benefit_4.jpg" className="front" />
              <div className="back">hi</div>
            </div>
          </ImgContainer>
        </div>
      </Body>

      <div>aaa</div>
    </Container>
  );
}

export default Benefits;
