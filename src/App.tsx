import { Grid, GridItem, Show } from "@chakra-ui/react";

const App = () => {
  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" " main"`,
          lg: `"nav nav" "asside main"`,
        }}
      >
        <GridItem
          area='nav'
          bg='blueviolet'
        >
          Nav
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
          Main
        </GridItem>
      </Grid>
    </div>
  );
};

export default App;
