import { Spinner } from "@chakra-ui/react";
import useTrailers from "../hooks/useTrailers";
type Props = {
  gameId: number;
};
const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);

  if (isLoading) return <Spinner />;

  if (error) throw error;
  const initial = data?.results[0];

  return initial ? (
    <div>
      <video
        src={initial.data[480]}
        poster={initial.preview}
        controls={true}
      />
    </div>
  ) : null;
};

export default GameTrailer;
