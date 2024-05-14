import OrdersTableBody from "./TableBody";
import tableData, { tableTitle } from "../../utils/orders/index";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Input,
  InputGroup,
  InputLeftElement,
  Table,
  TableContainer,
  Th,
  Thead,
  Tr,
  useMediaQuery,
} from "@chakra-ui/react";

const OrdersTable = () => {
  const [isLargerThan800] = useMediaQuery("(max-width: 870px)");

  return (
    <>
      <TableContainer>
        <Table variant="simple" w={"100%"} size={isLargerThan800 ? "sm" : "md"}>
          <Thead>
            <Tr>
              {tableTitle.map((value) => {
                return (
                  <Th key={value.id} className={value.className} w={"35%"}>
                    {value.searchInput ? (
                      <InputGroup>
                        <InputLeftElement pointerEvents="none">
                          <SearchIcon color="gray.300" />
                        </InputLeftElement>
                        <Input
                          type="tel"
                          placeholder="Search"
                          autoComplete="off"
                        />
                      </InputGroup>
                    ) : (
                      value.title
                    )}
                  </Th>
                );
              })}
            </Tr>
          </Thead>
          <OrdersTableBody />
        </Table>
      </TableContainer>
    </>
  );
};

export default OrdersTable;
