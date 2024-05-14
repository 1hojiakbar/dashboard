import {
  Table,
  TableContainer,
  Th,
  Thead,
  Tr,
  useMediaQuery,
} from "@chakra-ui/react";
import PaymentTableBody from "./TableBody";
import { tableTitle } from "../../utils/payment";

const PaymentTable = () => {
  const [isLargerThan800] = useMediaQuery("(max-width: 870px)");

  return (
    <>
      <TableContainer>
        <Table variant="simple" w={"100%"} size={isLargerThan800 ? "sm" : "md"}>
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
