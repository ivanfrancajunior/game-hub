import { Box, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/images/controle-de-video-game.webp";
import ColorMOdeSwitcher from "./ColorMOdeSwitcher";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <HStack padding={10}>
      <Link to='/'>
        <Box width={"48px"}>
          <Image
            src={logo}
            boxSize='48px'
            objectFit={"cover"}
          />
        </Box>
      </Link>
      <SearchInput />
      <ColorMOdeSwitcher />
    </HStack>
  );
};

export default Navbar;
