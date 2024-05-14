import { useLocation } from "react-router-dom";
import sidebarData from "../../utils/sidebar";
import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";
import { Logo, MenuItems } from "./style";
import logo from "../../assets/images/logo.png";

const SidebarContent = ({ close }) => {
  const location = useLocation();

  return (
    <Box p="5" color="white" bg="rgb(255, 255, 255)" h="100vh">
      <Flex align="center" mb="5">
        <Heading size="md" color="black">
          <Logo>
            <Logo.Title>PieCrust.uk</Logo.Title>
            <Logo.Image src={logo} alt="Not Found" />
          </Logo>
        </Heading>
        <Spacer />
      </Flex>
      {sidebarData.map((value) => {
        const { icon: Icon } = value;
        const activePath = location.pathname?.includes(value.path);
        return (
          <MenuItems
            key={value.id}
            to={value.path}
            onClick={close}
            active={activePath.toString()}
          >
            <MenuItems.Title active={activePath.toString()}>
              <Icon className="icon" />
              {value.label}
            </MenuItems.Title>
          </MenuItems>
        );
      })}
    </Box>
  );
};

export default SidebarContent;
