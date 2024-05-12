import Select from "./Select";
import ChartBox from "./ChartBox";
import { Divider, Flex, Heading, useMediaQuery } from "@chakra-ui/react";
import { Container, MainWrapper } from "./style";
import { Tabs, TabList, Tab } from "@chakra-ui/react";
import Card from "./Card";
import BarChart from "../../charts/BarChart";
import LineChartFunction from "../../charts/TinyLineChart";
import SummaryLists from "./Lists";

function Summary() {
  const [isLargerThan1690] = useMediaQuery("(max-width: 1690px)");

  const style = {
    color: "black",
    bg: "white",
    borderRadius: "10px",
    transition: "all 250ms",
  };

  return (
    <Container>
      <Heading
        as="h1"
        size="lg"
        noOfLines={1}
        mb={"37px"}
        style={{ marginRight: "auto" }}
      >
        Summary Dashboard
      </Heading>
      <Divider style={{ border: "1px solid #000" }} />
      <Tabs bg={"rgba(105, 134, 237, 0.6)"} mt={"14px"} borderRadius={"10px"}>
        <Tabs variant="unstyled" p={1} size={"md"}>
          <TabList>
            <Tab _selected={style}>Today</Tab>
            <Tab _selected={style}>Yesterday</Tab>
            <Tab _selected={style}>Week</Tab>
            <Tab _selected={style}>Moth</Tab>
          </TabList>
        </Tabs>
      </Tabs>
      <MainWrapper>
        <Flex
          alignItems={"flex-start"}
          flexDirection={isLargerThan1690 ? "column" : "row"}
          columnGap={"22px"}
          rowGap={isLargerThan1690 ? "37px" : "0"}
        >
          <ChartBox />
          <Card />
        </Flex>
        <Select />
        <Divider style={{ border: "1px solid #000" }} />
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
          <BarChart />
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
          <SummaryLists />
        </Flex>
      </MainWrapper>
    </Container>
  );
}

export default Summary;

// ant statistic
