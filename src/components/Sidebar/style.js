import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

// flex property
const flex = css`
  display: flex;
`;

// Basic Parent Container
const Container = styled.div`
  ${flex}
  overflow: hidden;
  overflow-y: scroll;
  box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.1);
  background: linear-gradient(
    219.59deg,
    rgba(255, 123, 172, 0.81) 9.929%,
    rgba(67, 165, 220, 0.62) 80.828%
  );
`;

// Body
const Body = styled.div`
  ${flex}
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: transparent;
  overflow: hidden;
  overflow-y: scroll;
`;

const WrapperOfOutlet = styled.div`
  ${flex}
  padding: 16px;
  flex: 1;
  height: 100vh;
  background: transparent;
  overflow: hidden;
  overflow-y: scroll;
`;

// Sidebar style
const Side = styled.div`
  ${flex}
  flex-direction: column;
  width: 20%;
  border: 2px solid green;
  height: 100vh;
  border: 1px solid rgb(239, 240, 246);
  border-radius: 0 20px 20px 0;
  background: rgb(255, 255, 255);
  overflow: hidden;
  border: 1px solid #777;
  overflow: hidden;
  overflow-y: scroll;
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
  justify-content: center;
  align-items: center;
  padding: 20px 0 0 15px;
`;

const MenuItems = styled(NavLink)`
  ${flex}
  margin: 0 auto;
  text-decoration: none;
  user-select: none;
  font-weight: ${({ active }) => active === "true" && "700"};
  background-color: ${({ active }) =>
    active === "true" && `rgba(27, 89, 248, 0.1)`};
  color: ${({ active }) =>
    active === "true" ? `var(--activeColor)` : `var(--grayColor)`};
  border-radius: ${({ active }) =>
    active === "true" && `0rem 0.63rem 0.63rem 0.63rem`};

  .icon {
    margin-right: 10px;
    margin-left: 10px;
  }
`;

MenuItems.Title = styled.div`
  display: inherit;
  align-items: center;
  white-space: nowrap;
  width: 198.03px;
  height: 39.19px;
  &:hover {
    color: var(--activeColor);
    & path {
      fill: var(--activeColor);
    }
  }
  & path {
    fill: ${({ active }) => active === "true" && " var(--activeColor)"};
  }
`;

const SideSupportWrapper = styled.div`
  ${flex}
  flex-direction: column;
  row-gap: 14px;
  padding-left: 10px;
`;

SideSupportWrapper.Title = styled.h5`
  color: rgba(0, 0, 0, 0.5);
  font-family: Inter;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.25rem;
  letter-spacing: -0.01rem;
  text-align: left;
  margin-left: 12px;
`;

const SupportItem = styled(NavLink)`
  ${flex}
  margin: 0 auto;
  text-decoration: none;
  padding: 3px 0 0 10px;
  margin: 0 10px 0 10px;
  background-color: ${({ active }) =>
    active === "true" && `rgba(27, 89, 248, 0.1)`};
  color: ${({ active }) =>
    active === "true" ? `var(--activeColor)` : `var(--grayColor)`};
  border-radius: ${({ active }) =>
    active === "true" && `0rem 0.63rem 0.63rem 0.63rem`};
`;

SupportItem.Title = styled.div`
  display: inherit;
  align-items: center;
  white-space: nowrap;
  width: 198.03px;
  height: 39.19px;
  padding-right: 7px;
  column-gap: 5px;
  &:hover {
    color: var(--activeColor);
    & path {
      fill: var(--activeColor);
    }
  }
  & path {
    fill: ${({ active }) => active === "true" && "var(--activeColor)"};
  }
`;

export {
  Container,
  Body,
  WrapperOfOutlet,
  Side,
  Logo,
  Menu,
  MenuItems,
  SideSupportWrapper,
  SupportItem,
  // SupportItemText,
};
