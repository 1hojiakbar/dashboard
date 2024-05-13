import { DownloadIcon } from "@chakra-ui/icons";
import { Button, Heading } from "@chakra-ui/react";

const DownloadButton = () => {
  return (
    <>
      <Button
        display={"flex"}
        alignItems={"center"}
        p={"14px"}
        columnGap={"8px"}
        colorScheme="blue"
        variant="ghost"
        _hover={{ bg: "rgba(0, 0, 0, 0.1)" }}
        marginLeft={"auto"}
      >
        <DownloadIcon mt={"3px"} />
        <Heading as="h4" size="md" fontWeight={500}>
          Download
        </Heading>
      </Button>
    </>
  );
};

export default DownloadButton;
