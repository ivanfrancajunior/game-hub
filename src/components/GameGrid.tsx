import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";
type FetchResponse = {
  count: number;
  next: string;
  previous: string;
  results: Game[];
};

type Game = {
  id: number;
  name: string;
};
const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    apiClient
      .get<FetchResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  });
  return (
    <>
    <Text>{error}</Text>
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
