import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/images/logo.webp";
import ColorMOdeSwitcher from "./ColorMOdeSwitcher";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <HStack padding={10}>
      <Image
        src={logo}
        boxSize='60px'
      />
      <SearchInput />
      <ColorMOdeSwitcher />
    </HStack>
  );
};

export default Navbar;
