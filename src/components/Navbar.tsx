import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/images/logo.webp";
import ColorMOdeSwitcher from "./ColorMOdeSwitcher";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <HStack padding={10}>
      <Link to='/'>
        <Image src={logo} boxSize='48px' />
      </Link>
      <SearchInput />
      <ColorMOdeSwitcher />
    </HStack>
  );
};

export default Navbar;
