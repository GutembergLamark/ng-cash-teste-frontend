import { useContext } from "react";

import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

import { DashboardContext } from "../../../contexts/DashboardProvider";

const FilterType = () => {
  const { filterType, setFilterType, filterTransactionType, setDate } =
    useContext(DashboardContext);

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        color="var(--black)"
        fontSize="1rem"
        p={12}
        bgColor="#eee"
        borderRadius={5}
        maxWidth="145px"
        onClick={() => {
          setDate("");
        }}
      >
        {filterType}
      </MenuButton>
      <MenuList
        display="flex"
        flexDirection="column"
        zIndex="10"
        bgColor={"var(--black)"}
        borderRadius={5}
      >
        {filterType !== "Todos" && (
          <MenuItem
            color="white"
            bgColor={"var(--black)"}
            textAlign="left"
            _hover={{ bgColor: "var(--black-1)" }}
            width="100%"
            p={12}
            borderRadius={5}
            onClick={() => {
              setFilterType("Todos");
              filterTransactionType();
            }}
          >
            Todos
          </MenuItem>
        )}
        {filterType !== "Cash In" && (
          <MenuItem
            color="white"
            bgColor={"var(--black)"}
            textAlign="left"
            _hover={{ bgColor: "var(--black-1)" }}
            width="100vw"
            p={12}
            borderRadius={5}
            onClick={() => {
              setFilterType("Cash In");
              filterTransactionType("Cash In");
            }}
          >
            Cash In
          </MenuItem>
        )}

        {filterType !== "Cash Out" && (
          <MenuItem
            color="white"
            bgColor={"var(--black)"}
            textAlign="left"
            _hover={{ bgColor: "var(--black-1)" }}
            width="100%"
            p={12}
            borderRadius={5}
            onClick={() => {
              setFilterType("Cash Out");
              filterTransactionType("Cash Out");
            }}
          >
            Cash Out
          </MenuItem>
        )}
      </MenuList>
    </Menu>
  );
};

export default FilterType;
