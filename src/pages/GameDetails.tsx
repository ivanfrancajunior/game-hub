import {
  GridItem,
  Heading,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttribuites from "../components/GameAttribuites";
import useGame from "../hooks/useGame";
import GameTrailer from "../components/GameTrailer";
import GameScreenshot from "../components/GameScreenshot";
const GameDetails = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Heading color={"yellow.400"} mb={4}>
          {game.name}
        </Heading>
        <ExpandableText>
          {game.description_raw}
        </ExpandableText>
        <GameAttribuites game={game} />
      </GridItem>
      <GridItem>
        <GameTrailer gameId={game.id} />
        <GameScreenshot gameId={game.id} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetails;
