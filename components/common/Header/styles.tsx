import styled from '@emotion/styled';

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 87.5px;
  background-color: rgb(0, 0, 0, 0.5);
  z-index: 999;
`;

export const InContainer = styled.div`
  width: 1140px;

  min-height: 50px;
  height: 87.5px;
  margin: 0 auto;
  padding-top: 20px;
`;

export const ImgContainer = styled.a`
  float: left;
  height: 65px;

  display: flex;
  align-items: center;
`;

export const Menu = styled.ul`
  float: right;
  list-style: none;

  margin: 0;
  padding: 0 0 1.5rem 0;
`;

export const MenuItem = styled.li`
  color: white;
  cursor: pointer;
  float: left;
  line-height: 16px;

  &:after {
    display: block;
    content: '';
    width: 0;
    border-bottom: solid 3px #ff4d4c;
  }

  &:hover {
    color: #ff4d4c;
    &:after {
      transition-duration: 0.2s;
      width: 100%;
    }

    .dropdown {
      display: block;
    }
  }

  a {
    font-size: large;
    padding: 22.5px 25px 8.4px 25px;
    display: block;
  }
`;

export const DropDown = styled.div`
  width: 100%;

  background-color: #000;
  opacity: 0.7;
`;

export const DropDownMenuContainer = styled.div`
  width: 1140px;
  height: 281px;

  margin: 0 auto;
  padding: 25px 0 35px 0;
`;

export const DropDownMenu = styled.div`
  float: right;
`;

export const DropDownMenuItems = styled.ul`
  float: left;

  list-style: none;
  margin: 0;
  padding: 0;
  width: 117px;
  margin-bottom: 1.5em;

  color: white;
`;

export const DropDownMenuItem = styled.li`
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #ff4d4c;
    transition: 0.5s;
  }

  a {
    padding: 10px 0px;
    font-size: 14px;
    display: block;
  }
`;
