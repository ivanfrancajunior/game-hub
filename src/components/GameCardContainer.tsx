import { Box } from "@chakra-ui/react";
import React from "react";

const GameCardContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      width={"300px"}
      overflow={"hidden"}
      borderRadius={8}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
