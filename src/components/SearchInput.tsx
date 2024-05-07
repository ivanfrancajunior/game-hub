import React, { useRef } from "react";
import {
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore(
    (store) => store.setSearchText
  );

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    if (ref.current) {
      setSearchText(ref.current.value);
    }
  };

  return (
    <form
      style={{ width: "100%", margin: "0 20px" }}
      onSubmit={handleSearch}
    >
      <InputGroup marginX={5}>
        <InputLeftElement children={<BsSearch />} />
        <Input
          focusBorderColor={"yellow.200"}
          placeholder='Search games...'
          borderRadius={20}
          variant={"filled"}
          ref={ref}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
