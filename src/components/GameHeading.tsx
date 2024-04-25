import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

type Props = {
  gameQuery: GameQuery;
};

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery?.platform?.name || ""} ${
    gameQuery?.genre?.name || ""
  } Games`;
  return (
    <Heading
      marginY={5}
      fontFamily={"5xl"}
      as='h1'
    >
      {heading}
    </Heading>
  );
};

export default GameHeading;
