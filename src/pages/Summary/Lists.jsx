import {
  Card,
  CardBody,
  Divider,
  Flex,
  Grid,
  Heading,
  Image,
  List,
  ListItem,
  useMediaQuery,
} from "@chakra-ui/react";
import {
  adminActivity,
  topInfluencers,
  utmSources,
} from "../../utils/summary/listData";

const SummaryLists = () => {
  const [isLargerThan1690] = useMediaQuery("(max-width: 1480px)");
  return (
    <Grid
      w={"100%"}
      gap={"22px"}
      templateColumns={isLargerThan1690 ? "1fr" : "2fr 1fr 1fr"}
    >
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        border={"1px solid rgb(239, 240, 246)"}
        borderRadius={"20px"}
        background={"rgb(255, 255, 255)"}
      >
        <CardBody>
          <Heading
            as="h1"
            mb={"12px"}
            size="lg"
            color={"rgb(77, 77, 77)"}
            fontFamily={"Inter"}
            fontSize={"14px"}
            fontWeight={600}
            lineHeight={"17px"}
            letterSpacing={"-0.15px"}
          >
            UTM Sources
          </Heading>
          <Divider style={{ border: "0.8px solid rgb(228, 229, 231)" }} />
          <List
            type="none"
            display={"flex"}
            flexDirection={"column"}
            rowGap={"13px"}
            mt={"15px"}
          >
            {utmSources.map((value) => {
              return (
                <ListItem
                  display={"grid"}
                  gridTemplateColumns={"1fr auto"}
                  w={"100%"}
                >
                  <Flex justifyContent={"space-between"} alignItems={"center"}>
                    <Flex alignItems={"center"} columnGap={"9px"}>
                      {value?.img && (
                        <Image
                          flex={1}
                          objectFit="cover"
                          maxW={{ base: "100%", sm: "200px" }}
                          src={value.img}
                          alt="Not Found Image"
                        />
                      )}
                      <Heading
                        as="h2"
                        size="lg"
                        color={"rgb(77, 77, 77)"}
                        fontFamily={"Inter"}
                        fontSize={"14px"}
                        fontWeight={500}
                        lineHeight={"17px"}
                        letterSpacing={"-0.15px"}
                      >
                        {value.title}
                      </Heading>
                    </Flex>
                    <Heading
                      as="h2"
                      size="lg"
                      color={"rgb(0, 0, 0)"}
                      fontFamily={"Inter"}
                      fontSize={"14px"}
                      fontWeight={700}
                      lineHeight={"17px"}
                      letterSpacing={"-0.15px"}
                      textAlign={"right"}
                    >
                      {value.count}
                    </Heading>
                  </Flex>
                </ListItem>
              );
            })}
          </List>
        </CardBody>
      </Card>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        border={"1px solid rgb(239, 240, 246)"}
        borderRadius={"20px"}
        background={"rgb(255, 255, 255)"}
      >
        <CardBody>
          <Heading
            as="h1"
            mb={"12px"}
            size="lg"
            color={"rgb(77, 77, 77)"}
            fontFamily={"Inter"}
            fontSize={"14px"}
            fontWeight={600}
            lineHeight={"17px"}
            letterSpacing={"-0.15px"}
          >
            Admin Activity
          </Heading>
          <Divider style={{ border: "0.8px solid rgb(228, 229, 231)" }} />
          <List
            type="none"
            display={"flex"}
            flexDirection={"column"}
            rowGap={"13px"}
            mt={"15px"}
          >
            {adminActivity.map((value) => {
              return (
                <ListItem
                  display={"grid"}
                  gridTemplateColumns={"1fr auto"}
                  w={"100%"}
                >
                  <Flex justifyContent={"space-between"} alignItems={"center"}>
                    <Flex alignItems={"center"} columnGap={"9px"}>
                      {value?.img && (
                        <Image
                          flex={1}
                          objectFit="cover"
                          maxW={{ base: "100%", sm: "200px" }}
                          src={value.img}
                          alt="Not Found Image"
                        />
                      )}
                      <Heading
                        as="h2"
                        size="lg"
                        color={"rgb(77, 77, 77)"}
                        fontFamily={"Inter"}
                        fontSize={"14px"}
                        fontWeight={500}
                        lineHeight={"17px"}
                        letterSpacing={"-0.15px"}
                      >
                        {value.title}
                      </Heading>
                    </Flex>
                    <Heading
                      as="h2"
                      size="lg"
                      color={"rgb(0, 0, 0)"}
                      fontFamily={"Inter"}
                      fontSize={"14px"}
                      fontWeight={700}
                      lineHeight={"17px"}
                      letterSpacing={"-0.15px"}
                      textAlign={"right"}
                    >
                      {value.count}
                    </Heading>
                  </Flex>
                </ListItem>
              );
            })}
          </List>
        </CardBody>
      </Card>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        border={"1px solid rgb(239, 240, 246)"}
        borderRadius={"20px"}
        background={"rgb(255, 255, 255)"}
      >
        <CardBody>
          <Heading
            as="h1"
            mb={"12px"}
            size="lg"
            color={"rgb(77, 77, 77)"}
            fontFamily={"Inter"}
            fontSize={"14px"}
            fontWeight={600}
            lineHeight={"17px"}
            letterSpacing={"-0.15px"}
          >
            Top Influencers
          </Heading>
          <Divider style={{ border: "0.8px solid rgb(228, 229, 231)" }} />
          <List
            type="none"
            display={"flex"}
            flexDirection={"column"}
            rowGap={"13px"}
            mt={"15px"}
          >
            {topInfluencers.map((value) => {
              return (
                <ListItem
                  display={"grid"}
                  gridTemplateColumns={"1fr auto"}
                  w={"100%"}
                >
                  <Flex justifyContent={"space-between"} alignItems={"center"}>
                    <Flex alignItems={"center"} columnGap={"9px"}>
                      {value?.img && (
                        <Image
                          flex={1}
                          objectFit="cover"
                          maxW={{ base: "100%", sm: "200px" }}
                          src={value.img}
                          alt="Not Found Image"
                        />
                      )}
                      <Heading
                        as="h2"
                        size="lg"
                        color={"rgb(77, 77, 77)"}
                        fontFamily={"Inter"}
                        fontSize={"14px"}
                        fontWeight={500}
                        lineHeight={"17px"}
                        letterSpacing={"-0.15px"}
                      >
                        {value.title}
                      </Heading>
                    </Flex>
                    <Heading
                      as="h2"
                      size="lg"
                      color={"rgb(0, 0, 0)"}
                      fontFamily={"Inter"}
                      fontSize={"14px"}
                      fontWeight={700}
                      lineHeight={"17px"}
                      letterSpacing={"-0.15px"}
                      textAlign={"right"}
                    >
                      {value.count}
                    </Heading>
                  </Flex>
                </ListItem>
              );
            })}
          </List>
        </CardBody>
      </Card>
    </Grid>
  );
};

export default SummaryLists;
