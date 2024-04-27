import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
("../services/api-client");
import genres from "../data/genres";

export type Genre = {
  id: number;
  name: string;
  image_background: string;
};
const apiClient = new APIClient<Genre>("/genres");
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 60 * 1000 * 60 * 24,
    initialData: genres,
  });

export default useGenres;
