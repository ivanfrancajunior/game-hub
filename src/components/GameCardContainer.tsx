import { Box } from "@chakra-ui/react";
import React from "react";

const GameCardContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Box
      _hover={{
        transform: "scale(1.05)",
        transition: "transform 0.13s ease-in",
      }}
      overflow={"hidden"}
      borderRadius={8}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
