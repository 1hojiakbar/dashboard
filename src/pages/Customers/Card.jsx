import {
  Card,
  CardHeader,
  Heading,
  SimpleGrid,
  Flex,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import cardData, { bottomCardData } from "../../utils/summary/cardData";

const SummaryCard = () => {
  const [isLargerThan1690] = useMediaQuery("(max-width: 1690px)");

  return (
    <Flex flexDirection={"column"} w={isLargerThan1690 ? "100%" : "50%"}>
      {/* top cards */}
      <SimpleGrid
        spacing={4}
        // templateColumns="repeat(auto-fill, minmax(168px, 1fr))"
        templateColumns="1fr 1fr 1fr"
      >
        {cardData.map((value) => {
          return (
            <Card key={value.id} borderRadius={"20px"}>
              <CardHeader>
                <Heading
                  size="xs"
                  textTransform="capitalize"
                  color={"rgba(0, 0, 0, 0.7)"}
                  fontSize={"14px"}
                >
                  {value.title}
                </Heading>
                <Flex mt={"8px"}>
                  <Text fontSize="24px" fontWeight={700}>
                    {value.count}
                  </Text>
                </Flex>
              </CardHeader>
            </Card>
          );
        })}
      </SimpleGrid>

      {/* center title */}
      <Heading
        fontStyle={"italic"}
        fontFamily={"Inria Serif"}
        color={"rgba(0, 0, 0, 0.6)"}
        fontSize={"18px"}
        fontWeight={"700"}
        m={"15px 0 24px 0"}
      >
        Customer Funnel - Summary based on Trace
      </Heading>

      {/* bottom cards */}
      <SimpleGrid
        spacing={4}
        // templateColumns="repeat(auto-fill, minmax(168px, 1fr))"
        templateColumns="1fr 1fr 1fr"
      >
        {bottomCardData.map((value) => {
          return (
            <Card key={value.id} borderRadius={"20px"}>
              <CardHeader>
                <Heading
                  size="xs"
                  textTransform="capitalize"
                  color={"rgba(0, 0, 0, 0.7)"}
                  fontSize={"14px"}
                >
                  {value.title}
                </Heading>
                <Flex mt={"8px"}>
                  <Text fontSize="24px" fontWeight={700} color={"#000"}>
                    {value.count}
                  </Text>
                </Flex>
              </CardHeader>
            </Card>
          );
        })}
      </SimpleGrid>
    </Flex>
  );
};

export default SummaryCard;
