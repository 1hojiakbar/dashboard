import styled, { css } from "styled-components";

// flex property
const flex = css`
  display: flex;
`;

// Parent Container
const Container = styled.div`
  ${flex}
`;

// Body
const Body = styled.div`
  ${flex}
  flex-direction: column;
  width: 100%;
`;

const WrapperOfOutlet = styled.div`
  ${flex}
  margin: 16px;
  border: 2px solid blue;
`;

// Sidebar style
const Side = styled.div`
  ${flex}
  flex-direction: column;
  width: 252.42px;
  border: 2px solid green;
  padding-top: 37px;
`;

const Logo = styled.div`
  ${flex}
  align-items: center;
  column-gap: 15px;
  margin: 0 auto;
`;

Logo.Title = styled.h1`
  color: rgb(0, 0, 0);
  font-family: Inter;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
`;

Logo.Image = styled.img`
  width: 44px;
  height: 29px;
`;

const Menu = styled.div`
  ${flex}
  flex-direction: column;
  row-gap: 16px;
`;

const MenuItems = styled.div`
  ${flex}
  margin: 0 auto;
`;

MenuItems.Title = styled.div`
  display: inherit;
  align-items: center;
  column-gap: 15px;
  width: 198.03px;
  height: 39.19px;
  border: 1px solid black;
`;

export { Container, Body, WrapperOfOutlet, Side, Logo, Menu, MenuItems };
