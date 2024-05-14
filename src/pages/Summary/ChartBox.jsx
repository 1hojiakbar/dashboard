import chartData from "../../utils/summary/chartData";
import { ChartCount, ChartDataText, ChartTitle } from "./style";
import { Flex, Grid, GridItem, useMediaQuery } from "@chakra-ui/react";

const ChartBox = () => {
  const [isLargerThan1690] = useMediaQuery("(max-width: 1690px)");
  const [isLargerThan800] = useMediaQuery("(max-width: 800px)");

  return (
    <>
      <Flex
        columnGap={"26px"}
        justifyContent={"space-between"}
        w={isLargerThan1690 || isLargerThan800 ? "100%" : "50%"}
        flexDirection={isLargerThan800 ? "column" : "row"}
        rowGap={isLargerThan800 && "26px"}
      >
        {chartData.map((value) => {
          const { chart: Chart } = value;
          return (
            <Grid
              templateAreas={`"title title" "count count" "text chart"`}
              gridTemplateRows={"25px 25px 1fr"}
              gridTemplateColumns={isLargerThan1690 ? "1fr" : "1fr 1fr"}
              w="100%"
              gap="1"
              key={value.id}
              p={"16px 21px 24px 21px"}
              background={"rgb(255, 255, 255)"}
              borderRadius={"10px"}
            >
              <>
                <GridItem area={"title"}>
                  <ChartTitle>{value.title}</ChartTitle>
                </GridItem>
                <GridItem area={"count"}>
                  <ChartCount>{value.count}</ChartCount>
                </GridItem>
                <GridItem
                  area={"text"}
                  display={"flex"}
                  alignItems={"flex-start"}
                  justifyContent={"center"}
                  flexDirection={"column"}
                  rowGap={"12px"}
                >
                  {value.percentage.map((child) => {
                    return (
                      <Flex alignItems={"center"} key={child.id}>
                        <div
                          style={{
                            background: child.color,
                            padding: "5px 8px",
                            borderRadius: "3px",
                            marginRight: "4.5px",
                            height: "8px",
                          }}
                        />
                        <ChartDataText>
                          <strong>{child.percent}</strong> {child.title}
                        </ChartDataText>
                      </Flex>
                    );
                  })}
                </GridItem>
                <GridItem
                  pl="2"
                  area={"chart"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Chart />
                </GridItem>
              </>
            </Grid>
          );
        })}
      </Flex>
    </>
  );
};

export default ChartBox;
