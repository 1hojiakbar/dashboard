import { Button } from "@chakra-ui/react";

function GenericButton({ children, ...data }) {
  return (
    <>
      <Button {...data}>{children}</Button>
    </>
  );
}

export default GenericButton;
