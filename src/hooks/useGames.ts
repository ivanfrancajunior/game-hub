import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient, {
  FetchResponse,
} from "../services/api-client";
import useGameQueryStore from "../store";
import { Game } from "../entities/Game";

export type Platform = {
  id: number;
  name: string;
  slug: string;
};

const apiClient = new APIClient<Game>("/games");

export const useGames = () => {
  const gameQuery = useGameQueryStore(
    (store) => store.gameQuery
  );

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery?.genreId,
          parent_platform: gameQuery?.platformId,
          ordering: gameQuery?.sortOrder,
          search: gameQuery?.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next
        ? allPages.length + 1
        : undefined;
    },
    staleTime: 24 * 60 * 1000 * 60,
  });
};
