import { Flex, Select, useMediaQuery } from "@chakra-ui/react";
import { selectData } from "../../utils/summary/select";

const SummarySelect = () => {
  const [isLargerThan576] = useMediaQuery("(max-width: 576px)");

  return (
    <Flex
      flexDirection={isLargerThan576 ? "column" : "row"}
      columnGap={"12px"}
      rowGap={isLargerThan576 && "12px"}
      w={isLargerThan576 ? "100%" : "80%"}
    >
      {selectData.map((value) => {
        return (
          <Select
            key={value.id}
            placeholder={`${value.title}: ${value.time}`}
            bg={"rgb(255, 255, 255)"}
            size="md"
          />
        );
      })}
    </Flex>
  );
};

export default SummarySelect;
