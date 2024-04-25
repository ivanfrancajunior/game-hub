import { useState } from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/useGames";
import Navbar from "./components/Navbar";
import GamesGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import PlataformSelector from "./components/PlataformSelector";

export type GameQuery = {
  genre: Genre | null;
  platform: Platform | null;
};

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" " main"`,
        lg: `"nav nav" "asside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area='nav'>
        <Navbar />
      </GridItem>
      <Show above='lg'>
        <GridItem
          area='asside'
          paddingX={5}
        >
          <GenresList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area='main'>
        <PlataformSelector
          selectedPlatform={gameQuery.platform}
          onSelectPlatform={(platform) =>
            setGameQuery({ ...gameQuery, platform })
          }
        />
        <GamesGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
};

export default App;
