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
} from "@chakra-ui/react";

const OrdersTable = () => {
  return (
    <>
      <TableContainer>
        <Table variant="simple" w={"100%"} size={"sm"}>
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
