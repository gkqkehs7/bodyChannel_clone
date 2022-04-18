import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import {} from './styles';

function Benefits() {
  const isMobile = useMediaQuery({ query: `(max-width:750px)` });

  return (
    <div>
      <div>
        <div>24HOUR / 7DAY 전지점 통합회원권</div>
        <div>Bodychannel is 24/7 open fitness club where you can use</div>
        <div>integrated membership of all branches anytime and anywere.</div>
      </div>

      <div>
        <div></div>
      </div>
    </div>
  );
}

export default Benefits;
