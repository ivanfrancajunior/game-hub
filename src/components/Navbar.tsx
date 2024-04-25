import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/images/logo.webp";
import ColorMOdeSwitcher from "./ColorMOdeSwitcher";
import SearchInput from "./SearchInput";
type Props = {
  onSearch: (searchText: string) => void;
};
const Navbar = ({ onSearch }: Props) => {
  return (
    <HStack padding={10}>
      <Image
        src={logo}
        boxSize='60px'
      />
      <SearchInput onSearch={onSearch} />
      <ColorMOdeSwitcher />
    </HStack>
  );
};

export default Navbar;
