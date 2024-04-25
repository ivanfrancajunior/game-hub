import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GamesGrid from "./components/GameGrid";

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
          Asside
        </GridItem>
      </Show>
      <GridItem
        area='main'
        bg='tomato'
      >
        <GamesGrid />
      </GridItem>
    </Grid>
  </div>
);

export default App;
