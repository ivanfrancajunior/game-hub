import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../hooks/useGames";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

type Props = {
  gameQuery: GameQuery;
};

const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenre(gameQuery.genreId);

  const plataform = usePlatform(gameQuery.platformId);

  const heading = `${plataform?.name || ""} ${genre?.name || ""} Games`;
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
