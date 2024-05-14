import { useState } from "react";
import tableData from "../../utils/orders/index";
import GenericButton from "../../components/Generic/Button";
import MeuIcon from "../../assets/icons/menu-icon.svg?react";
import {
  Checkbox,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  Tbody,
  Td,
  Tr,
} from "@chakra-ui/react";

const OrdersTableBody = () => {
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
      item.id === selected.select.id ? { ...item, activeUsers: newData } : item
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
              <Td display={"flex"} alignItems={"center"} columnGap={"20px"}>
                <Checkbox size="lg" colorScheme="blue" />
                <Image
                  src={value.img}
                  w={"60px"}
                  h={" 42px"}
                  userSelect={"none"}
                />
              </Td>
              <Td>
                {selected.select?.id == value.id ? (
                  <Input
                    defaultValue={selected.select.activeUsers}
                    onChange={({ target }) => setnewData(target.value)}
                  />
                ) : (
                  value.activeUsers
                )}
              </Td>
              <Td>{value.userId}</Td>
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
                      <MenuItem onClick={() => onSelect(value)}>Edit</MenuItem>
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

export default OrdersTableBody;
