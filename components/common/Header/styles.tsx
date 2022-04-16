import styled from '@emotion/styled';

export const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 10vh;
  padding-top: 2vh;
  background-color: rgb(0, 0, 0, 0.5);
`;

export const InContainer = styled.div`
  width: 1140px;
  margin: 0 auto;
`;

// @media screen and (max-width: 768px) {
//   flex-direction: column;
// }

// @media screen and (min-width: 1200px) {
//   margin: 0 auto;
// }

// @media screen and (min-width: 1800px) {
//   margin: 0 20vw;
// } ;
export const Menu = styled.ul`
  color: white;
  list-style: none;
`;

export const MenuItem = styled.li`
  width: 118px;
`;
