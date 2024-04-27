import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import { Genre } from "./useGenres";

export type Platform = {
  id: number;
  name: string;
  slug: string;
};
export type GameQuery = {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
};

export type Game = {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
};

const apiClient = new APIClient<Game>("/games");

export const useGames = (gameQuery: GameQuery | null) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery?.genre?.id,
          parent_platform: gameQuery?.platform?.id,
          ordering: gameQuery?.sortOrder,
          search: gameQuery?.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: 24 *60 * 1000 * 60 ,
  });
