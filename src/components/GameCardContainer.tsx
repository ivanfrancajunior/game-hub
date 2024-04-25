import { Box } from "@chakra-ui/react";
import React from "react";

const GameCardContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      width={"100%"}
      overflow={"hidden"}
      borderRadius={8}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
