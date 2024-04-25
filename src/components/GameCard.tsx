import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";

type Props = {
  game: Game;
};

const GameCard = ({ game }: Props) => {
  return (
    <Card
      borderRadius={8}
      overflow={"hidden"}
    >
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
