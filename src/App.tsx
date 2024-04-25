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
    >
      <GridItem area='nav'>
        <Navbar />
      </GridItem>
      <Show above='lg'>
        <GridItem
          area='asside'
          bg='teal'
        >
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
