import {
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/getCroppedImageUrl";

type Props = {
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId?: number;
};

const GenresList = ({ onSelectGenre, selectedGenreId }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (isLoading) return <Spinner />;
  if (error) return null;
  return (
    <>
      <Heading
        fontSize={"2xl"}
        marginBottom={3}
      >
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem
            key={genre.id}
            paddingY={"5px"}
          >
            <HStack spacing={8}>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize={"32px"}
                borderRadius={"8px"}
                objectFit={"cover"}
              />
              <Button
                whiteSpace={"normal"}
                textAlign={"left"}
                textColor={genre.id === selectedGenreId ? "yellow.400" : ""}
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                onClick={() => {
                  onSelectGenre(genre);
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
