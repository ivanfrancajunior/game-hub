import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttribuites from "../components/GameAttribuites";
import useGame from "../hooks/useGame";
import GameTrailer from "../components/GameTrailer";
const GameDetails = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <Heading color={"yellow.400"} mb={4}>
        {game.name}
      </Heading>
      <ExpandableText>
        {game.description_raw}
      </ExpandableText>
      <GameAttribuites game={game} />
      <GameTrailer gameId={game.id} />
    </>
  );
};

export default GameDetails;
