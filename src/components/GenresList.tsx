import {
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Button,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/getCroppedImageUrl";

type Props = {
  onSelectGenre: (genre: Genre) => void;
};

const GenresList = ({ onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  const colapseName = (name: string) => {
    if (name.length > 10) {
      return `${name.substring(0, 10)}...`;
    }
    return name;
  };

  if (isLoading) return <Spinner />;
  if (error) return null;
  return (
    <List>
      {data.map((genre) => (
        <ListItem
          key={genre.id}
          paddingY={"5px"}
        >
          <HStack spacing={8}>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              boxSize={"32px"}
              borderRadius={"8px"}
            />
            <Button
              onClick={() => {
                onSelectGenre(genre);
              }}
              variant={"link"}
              fontSize={"lg"}
            >
              {colapseName(genre.name)}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;

//TODO Add skeleton list
