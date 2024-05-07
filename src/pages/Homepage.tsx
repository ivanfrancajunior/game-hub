import {
  Grid,
  Show,
  GridItem,
  Flex,
  Box,
} from "@chakra-ui/react";
import GamesGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenresList from "../components/GenresList";
import PlataformSelector from "../components/PlataformSelector";
import SortSelector from "../components/SortSelector";

const Homepage = () => {
  return (
    <Grid
      templateAreas={{
        base: ` "main"`,
        lg: ` "asside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <Show above='lg'>
        <GridItem area='asside' paddingX={5}>
          <GenresList />
        </GridItem>
      </Show>
      <GridItem area='main'>
        <Box paddingLeft={8}>
          <GameHeading />
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlataformSelector />
            </Box>
            <SortSelector />
          </Flex>
        </Box>
        <GamesGrid />
      </GridItem>
    </Grid>
  );
};

export default Homepage;
