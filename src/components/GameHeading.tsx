import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const genreId = useGameQueryStore(
    (store) => store.gameQuery.genreId
  );
  const genre = useGenre(genreId);

  const platformId = useGameQueryStore(
    (store) => store.gameQuery.platformId
  );
  const plataform = usePlatform(platformId);

  const heading = `${plataform?.name || ""} ${
    genre?.name || ""
  } Games`;
  return (
    <Heading marginY={5} fontFamily={"5xl"} as='h1'>
      {heading}
    </Heading>
  );
};

export default GameHeading;
