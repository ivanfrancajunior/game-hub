import { BsChevronDown } from "react-icons/bs";
import { Menu, Button, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<BsChevronDown />}
      >
        Order by relevance
      </MenuButton>
      <MenuList>
        <MenuItem>Relevance</MenuItem>
        <MenuItem>Date added</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem>Relase date</MenuItem>
        <MenuItem>Popularity</MenuItem>
        <MenuItem>Average rating</MenuItem>

        {/* {data.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))} */}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
