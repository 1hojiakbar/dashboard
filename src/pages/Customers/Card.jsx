import {
  Card,
  CardHeader,
  Heading,
  SimpleGrid,
  Flex,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { bottomCardData } from "../../utils/summary/cardData";

const CustomersCard = () => {
  const [isLargerThan1690] = useMediaQuery("(max-width: 1690px)");
  const [isLargerThan1400] = useMediaQuery("(min-width: 1400px)");
  const [isLargerThan1200] = useMediaQuery("(max-width: 1200px)");

  return (
    <Flex flexDirection={"column"} w={isLargerThan1200 ? "100%" : "50%"}>
      <Heading
        fontStyle={"italic"}
        fontFamily={"Inria Serif"}
        color={"rgba(0, 0, 0, 0.6)"}
        fontSize={"18px"}
        fontWeight={"700"}
        m={`2px 0 3px 0`}
      >
        Customer Funnel - Summary based on Trace
      </Heading>

      <SimpleGrid
        spacing={4}
        templateColumns={
          isLargerThan1400
            ? "1fr 1fr 1fr"
            : isLargerThan1200
            ? "1fr"
            : "1fr 1fr"
        }
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

export default CustomersCard;
