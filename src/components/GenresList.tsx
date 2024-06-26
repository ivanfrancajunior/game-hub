import {
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/getCroppedImageUrl";
import useGameQueryStore from "../store";

const GenresList = () => {
  const { data, isLoading, error } = useGenres();
  const selectedGenreId = useGameQueryStore(
    (store) => store.gameQuery.genreId
  );

  const setSelectedGenreId = useGameQueryStore(
    (store) => store.setGenreId
  );

  if (isLoading) return <Spinner />;
  if (error) return null;
  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY={"5px"}>
            <HStack spacing={8}>
              <Image
                src={getCroppedImageUrl(
                  genre.image_background
                )}
                boxSize={"32px"}
                borderRadius={"8px"}
                objectFit={"cover"}
              />
              <Button
                whiteSpace={"normal"}
                textAlign={"left"}
                textColor={
                  genre.id === selectedGenreId
                    ? "yellow.400"
                    : ""
                }
                fontWeight={
                  genre.id === selectedGenreId
                    ? "bold"
                    : "normal"
                }
                onClick={() => {
                  setSelectedGenreId(genre.id);
                }}
                variant={"link"}
                fontSize={"lg"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenresList;
