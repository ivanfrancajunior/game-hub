import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup marginX={5}>
      <InputLeftElement children={<BsSearch />} />
      <Input
        focusBorderColor={"yellow.200"}
        placeholder='Search games...'
        borderRadius={20}
        variant={"filled"}
      />
    </InputGroup>
  );
};

export default SearchInput;
