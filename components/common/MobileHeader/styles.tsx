import styled from '@emotion/styled';
import { HiMenu } from 'react-icons/hi';

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 63px;
  background-color: rgb(0, 0, 0, 0.5);
  padding: 0 15px;
`;

export const ImgContainer = styled.a`
  float: left;
  height: 65px;

  display: flex;
  align-items: center;

  position: absolute;
  left: calc(44% - 76px);
`;

export const MenuContainer = styled.div`
  float: right;
  color: white;
  height: 100%;

  display: flex;
  align-items: center;

  cursor: pointer;
`;

export const Menu = styled(HiMenu)``;
