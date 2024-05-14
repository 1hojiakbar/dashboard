import { Button } from "@chakra-ui/react";

const GenericButton = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};

export default GenericButton;
