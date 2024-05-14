import { Table, TableContainer, Th, Thead, Tr } from "@chakra-ui/react";
import { tableTitle } from "../../utils/payment";
import OrdersTableBody from "./TableBody";

const OrdersTable = () => {
  return (
    <>
      <TableContainer>
        <Table variant="simple" w={"100%"} m={"0"} size={"sm"}>
          <Thead>
            <Tr>
              {tableTitle.map((value) => {
                return (
                  <Th key={value.id} className={value.className}>
                    {value.name}
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
