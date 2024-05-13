import PaymentTable from "./Table";
import GenericTabs from "../../components/Generic/Tabs";
import TopDivider from "../../components/Generic/Divider";
import DownloadButton from "../../components/Generic/Button/download";
import { Container } from "./style";
import { Flex, Heading, Text, Divider } from "@chakra-ui/react";

const Payment = () => {
  return (
    <Container>
      <Heading
        as="h1"
        size="lg"
        noOfLines={1}
        mb={"37px"}
        style={{ marginRight: "auto" }}
      >
        Payment Dashboard
      </Heading>
      <TopDivider />
      <Flex w={"100%"} justifyContent={"center"}>
        <GenericTabs />
      </Flex>
      <DownloadButton />
      <Flex>
        <Flex
          border={"1px solid rgb(239, 240, 246)"}
          borderRadius={"20px"}
          background={"rgb(255, 255, 255)"}
          w={"100%"}
          justifyContent={"center"}
          flexDirection={"column"}
          p={"31px 21px 10px 21px"}
          mt={"16px"}
        >
          <Heading
            color={"rgb(47, 47, 47)"}
            fontFamily={"Inter"}
            fontSize={"17px"}
            fontWeight={600}
            lineHeight={"22px"}
            text-align={"left"}
            whiteSpace={"nowrap"}
            style={{ display: "flex", alignItems: "center", columnGap: "20px" }}
          >
            Details <Text color={"rgba(47, 47, 47, 0.4)"}>258</Text>
          </Heading>
          <Divider
            border={"0.8px solid rgb(228, 229, 231)"}
            m={"9px 0 22px 0"}
          />
          <PaymentTable />
        </Flex>
      </Flex>
    </Container>
  );
};

export default Payment;
