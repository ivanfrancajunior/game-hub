import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorMOdeSwitcher = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme='yellow'
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text>Dark Mode</Text>
    </HStack>
  );
};

export default ColorMOdeSwitcher;
