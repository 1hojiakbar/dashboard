import React, { useState } from "react";
import tableData from "../../utils/payment";
import GenericButton from "../../components/Generic/Button";
import MeuIcon from "../../assets/icons/menu-icon.svg?react";
import {
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  Radio,
  Tbody,
  Td,
  Tr,
} from "@chakra-ui/react";

const PaymentTableBody = () => {
  const [list, setList] = useState(tableData);
  const [newData, setnewData] = useState("");
  const [selected, setSelected] = useState({ select: null });

  const onRemove = (id) => {
    let res = list.filter((value) => value.id !== id);
    setList(res);
  };

  const onSelect = (value) => {
    if (!selected.select) setSelected({ select: value });
    else {
      let res = list.map((val) => {
        return val.id === selected.select?.id ? selected.select : val;
      });
      setSelected({ select: null });
      setList(res);
    }
  };

  const onSaveData = () => {
    const updatedList = list.map((item) =>
      item.id === selected.select.id ? { ...item, discp: newData } : item
    );
    setList(updatedList);
    setSelected({ select: null });
    setnewData("");
  };

  return (
    <>
      <Tbody>
        {list.map((value) => {
          return (
            <Tr color={"rgb(112, 118, 140)"} key={value.id}>
              <Td>
                <Radio size="lg" name="1" colorScheme="blue" />
              </Td>
              <Td>
                {selected.select?.id == value.id ? (
                  <Input
                    defaultValue={selected.select.discp}
                    onChange={({ target }) => setnewData(target.value)}
                  />
                ) : (
                  value.discp
                )}
              </Td>
              <Td>{value.payment}</Td>
              <Td>{value.amount}</Td>
              <Td>{value.odrderId}</Td>
              <Td>{value.orderDate}</Td>
              <Td>
                <Menu>
                  {selected.select?.id == value.id ? (
                    <GenericButton size="sm" onClick={onSaveData}>
                      Save
                    </GenericButton>
                  ) : (
                    <MenuButton>
                      <GenericButton colorScheme="rgba(0, 0, 0, 0.8)">
                        <MeuIcon />
                      </GenericButton>
                    </MenuButton>
                  )}
                  <Portal>
                    <MenuList>
                      <MenuItem onClick={() => onRemove(value.id)}>
                        Remove
                      </MenuItem>
                      <MenuItem onClick={() => onSelect(value)}>
                        Edit Description
                      </MenuItem>
                    </MenuList>
                  </Portal>
                </Menu>
              </Td>
            </Tr>
          );
        })}
      </Tbody>
    </>
  );
};

export default PaymentTableBody;
