import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../hooks/useGames";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

type Props = {
  gameQuery: GameQuery;
};

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const { data: platform } = usePlatforms();

  const genreName = genres.results.find(
    (genre) => genre.id === gameQuery.genreId
  );

  const platformName = platform.results.find(
    (platform) => platform.id === gameQuery.platformId
  );

  const heading = `${platformName?.name || ""} ${genreName?.name || ""} Games`;
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
