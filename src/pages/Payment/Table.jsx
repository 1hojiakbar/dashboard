import { Table, TableContainer, Th, Thead, Tr } from "@chakra-ui/react";
import PaymentTableBody from "./TableBody";
import { tableTitle } from "../../utils/payment";

const PaymentTable = () => {
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
          <PaymentTableBody />
        </Table>
      </TableContainer>
    </>
  );
};

export default PaymentTable;
