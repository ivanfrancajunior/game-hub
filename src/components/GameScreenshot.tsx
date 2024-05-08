import {
  Image,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshot";

type Props = {
  gameId: number;
};
const GameScreenshot = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenshots(gameId);
  console.log(data);

  if (error) throw error;

  if (isLoading) return <Spinner />;

  return (
    <SimpleGrid
      mt={5}
      padding={5}
      columns={{ base: 1, md: 2 }}
      spacing={2}
    >
      {data?.results.map((screenShot) => (
        <Image
          key={screenShot.id}
          src={screenShot.image}
          alt={"game_screenshot"}
        />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshot;
