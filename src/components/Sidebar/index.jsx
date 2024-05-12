import { Outlet } from "react-router-dom";
import { Body, Container, Side, WrapperOfOutlet } from "./style";
import {
  Box,
  useMediaQuery,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import SidebarContent from "./ContentSidebar";

const Sidebar = () => {
  const [isLargerThan992] = useMediaQuery("(min-width: 992px)");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container>
      {isLargerThan992 ? (
        <Side>
          <SidebarContent />
        </Side>
      ) : (
        <IconButton
          icon={<HamburgerIcon />}
          variant="outline"
          aria-label="Open Menu"
          onClick={onOpen}
          position="fixed"
          top="10px"
          left="10px"
          zIndex="overlay"
        />
      )}
      <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent h={"full"}>
          <DrawerBody>
            <DrawerCloseButton mr={1} onClick={onClose} color={"black"} />
            <SidebarContent />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Box flex="1">
        <Body>
          <WrapperOfOutlet>
            <Outlet />
          </WrapperOfOutlet>
        </Body>
      </Box>
    </Container>
  );
};

export default Sidebar;
