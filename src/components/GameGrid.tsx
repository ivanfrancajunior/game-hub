import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useGames } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../hooks/useGames";
import InfinitScroll from "react-infinite-scroll-component";
import React from "react";

type Props = {
  gameQuery: GameQuery | null;
};

const GameGrid = ({ gameQuery }: Props) => {
  const {
    data,
    error,
    isLoading,

    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const skeletonGrid = [1, 2, 3, 4, 5, 6];
  const fetchMoreGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  if (error) return <Text>{error.message}</Text>;
  return (
    <InfinitScroll
      loader={<Spinner marginY={2}/>}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      dataLength={fetchMoreGamesCount}
    >
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 4,
        }}
        spacing={6}
      >
        {isLoading &&
          skeletonGrid.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </InfinitScroll>
  );
};

export default GameGrid;
