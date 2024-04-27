import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { FetchResponse, Genre } from "./useData";
import genres from "../data/genres";

const useGenres = () =>
  useQuery<Genre[], Error>({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
    staleTime: 60 * 1000 * 60 * 24,
    initialData: { count: genres.count, results: genres.results },
  });

export default useGenres;
