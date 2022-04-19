import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 100vw;
  padding: 40px 0;
  @media ${({ theme }) => theme.device.tablet} {
    padding: 85px 0;
  }
`;

//낮은것부터 써주어야 한다 아니면 적용안댐
export const Header = styled.div`
  margin: 0 auto;

  @media ${({ theme }) => theme.device.tablet} {
    width: 750px;
  }

  @media ${({ theme }) => theme.device.tabletL} {
    width: 970px;
  }

  @media ${({ theme }) => theme.device.NoteBook} {
    width: 1170px;
  }

  div {
    display: flex;
    justify-content: center;
  }
`;

export const Body = styled.div`
  /* .bug::after {
    content: '';
    clear: both;
    display: block;
  } */

  .bug {
    overflow: hidden;
    margin: 0 auto;

    @media ${({ theme }) => theme.device.tablet} {
      width: 750px;
    }

    @media ${({ theme }) => theme.device.tabletL} {
      width: 1000px;
    }

    @media ${({ theme }) => theme.device.NoteBook} {
      width: 1200px;
    }
  }
`;

//자식요소들 float left로 정렬했을때, 부모 높이가 0이되는 경우가 있다.
//해결방법 위에서 둘중하나 택1
export const ImgContainer = styled.div`
  float: left;
  width: 321px;
  height: 376px;
  padding-right: 10px;
  padding-left: 10px;

  @media ${({ theme }) => theme.device.tabletL} {
    width: 206px;
    height: 376px;
  }

  @media ${({ theme }) => theme.device.NoteBook} {
    width: 256px;
    height: 376px;
  }

  .flip {
    transition: transform 1.2s;
    transform-style: preserve-3d;
  }

  &:hover .flip {
    transform: rotateY(180deg);
  }

  .test {
    backface-visibility: hidden;
  }
  .front {
    display: block;
    width: 100%;
    height: 100%;
  }

  .back {
    padding: 20px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    backface-visibility: hidden;
    transform: rotateY(180deg);
  }
`;
