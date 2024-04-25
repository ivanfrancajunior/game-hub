import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GamesGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";

const App = () => (
  <div>
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
        <GridItem area='asside' paddingX={5}>
          <GenresList />
        </GridItem>
      </Show>
      <GridItem area='main'>
        <GamesGrid />
      </GridItem>
    </Grid>
  </div>
);

export default App;
