import Card from "./Card";
import Select from "./Select";
import ChartBox from "./ChartBox";
import CustomersLists from "./Lists";
import BarChart from "../../charts/BarChart";
import GenericTabs from "../../components/Generic/Tabs";
import TopDivider from "../../components/Generic/Divider";
import DownloadButton from "../../components/Generic/Button/download";
import LineChartFunction from "../../charts/TinyLineChart";
import { Container, MainWrapper } from "./style";
import { Divider, Flex, Heading, useMediaQuery } from "@chakra-ui/react";

function Customers() {
  const [isLargerThan1200] = useMediaQuery("(max-width: 1200px)");

  return (
    <Container>
      <Heading
        as="h1"
        size="lg"
        mb={"37px"}
        style={{ marginRight: "auto", whiteSpace: "nowrap" }}
      >
        Customer Dashboard
      </Heading>
      <TopDivider />
      <TopDivider />
      <GenericTabs />
      <DownloadButton />
      <MainWrapper>
        <Select />
        <Flex
          alignItems={"flex-start"}
          flexDirection={isLargerThan1200 ? "column" : "row"}
          columnGap={"22px"}
          w={"100%"}
          rowGap={isLargerThan1200 ? "37px" : "0"}
        >
          <ChartBox />
          <Card />
        </Flex>
        <Flex
          bg={"rgb(255, 255, 255)"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          borderRadius={"20px"}
          w={"100%"}
          p={"17px 20px 23px 20px"}
        >
          <Heading
            mb={"8px"}
            size={"large"}
            color={"rgb(77, 77, 77)"}
            fontFamily={"Inter"}
            fontSize={"14px"}
            fontWeight={500}
            lineHeight={"17px"}
            alignSelf={"flex-start"}
            letterSpacing={"-0.15px"}
            textAlign={"left"}
          >
            Overall Customer Acquisition
          </Heading>
          <Divider
            m={"8px 0 27px 0"}
            style={{ border: "0.8px solid rgb(228, 229, 231)" }}
          />
          <BarChart lineSize={15} />
        </Flex>
        <Flex
          bg={"rgb(255, 255, 255)"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          borderRadius={"20px"}
          w={"100%"}
          p={"17px 20px 23px 20px"}
        >
          <Heading
            mb={"8px"}
            size={"large"}
            color={"rgb(77, 77, 77)"}
            fontFamily={"Inter"}
            fontSize={"14px"}
            fontWeight={500}
            lineHeight={"17px"}
            alignSelf={"flex-start"}
            letterSpacing={"-0.15px"}
            textAlign={"left"}
          >
            Overall Customers Activity
          </Heading>
          <Divider
            m={"8px 0 27px 0"}
            style={{ border: "0.8px solid rgb(228, 229, 231)" }}
          />
          <LineChartFunction />
        </Flex>
        <Flex>
          <CustomersLists />
        </Flex>
      </MainWrapper>
    </Container>
  );
}

export default Customers;
