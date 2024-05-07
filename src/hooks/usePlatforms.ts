import APIClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import { Platform } from "../entities/Platform";

const apiClient = new APIClient<Platform>("/platforms");
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 60 * 1000 * 60 * 24,
    initialData: {
      count: platforms.count,
      results: platforms.results,
    },
  });

export default usePlatforms;
