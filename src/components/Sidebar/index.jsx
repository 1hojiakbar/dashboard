import React from "react";
import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import {
  Body,
  Container,
  WrapperOfOutlet,
  Side,
  Logo,
  Menu,
  MenuItems,
} from "./style";
import sidebar from "../../utils/sidebar";

const Sidebar = () => {
  return (
    <Container>
      <Side>
        <Logo>
          <Logo.Title>PieCrust.uk </Logo.Title>
          <Logo.Image src={logo} alt="Not Found" />
        </Logo>
        <Menu>
          {sidebar.map((value) => {
            const { icon: Icon } = value;
            return (
              <MenuItems key={value.id}>
                <MenuItems.Title>
                  <Icon className="icon" />
                  {value.title}
                </MenuItems.Title>
              </MenuItems>
            );
          })}
        </Menu>
      </Side>
      <Body>
        <Navbar />
        <WrapperOfOutlet>
          <Outlet />
        </WrapperOfOutlet>
      </Body>
    </Container>
  );
};

export default Sidebar;
