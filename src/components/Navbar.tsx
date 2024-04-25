import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/gameshub-logo.svg";
import ColorMOdeSwitcher from "./ColorMOdeSwitcher";

const Navbar = () => {
  return (
    <HStack
      justifyContent={"space-between"}
      padding={15}
    >
      <Image
        src={logo}
        boxSize={"60px"}
      />
      <ColorMOdeSwitcher />
    </HStack>
  );
};

export default Navbar;
