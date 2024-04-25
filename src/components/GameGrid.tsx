import { SimpleGrid, Text } from "@chakra-ui/react";
import { useGames } from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <>
      <Text>{error}</Text>
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 5,
        }}
        padding={8}
        spacing={8}
      >
        {games.map((game) => (
          <GameCard
            key={game.id}
            game={game}
          />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
