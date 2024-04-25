import { Badge } from "@chakra-ui/react";

type Props = {
  score: number;
};

const CriticScore = ({ score }: Props) => {
  const color = score > 75 ? "green.200" : score > 60 ? "yellow.700" : "";
  return (
    <Badge
      fontSize={"14px"}
      paddingX={2}
      borderRadius={4}
      color={color}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
