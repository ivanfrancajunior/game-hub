import { Platform } from "../hooks/useGames";
import { Genre } from "./Genre";
import { Publisher } from "./Publisher";

export type Game = {
  id: number;
  name: string;
  slug: string;
  genres: Genre[];
  publishers: Publisher[];
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
};
