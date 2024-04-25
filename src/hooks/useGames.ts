import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

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

export const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchResponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { games, error };
};
