import { Flex, Select } from "@chakra-ui/react";
import { selectData } from "../../utils/summary/select";

const SummarySelect = () => {
  return (
    <Flex columnGap={"8px"} w={"80%"}>
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
