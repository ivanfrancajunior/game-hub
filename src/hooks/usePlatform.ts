import usePlatforms from "./usePlatforms";

const usePlatform = (id?: number) => {
  const { data: platforms } = usePlatforms();
  const plataform = platforms.results.find((platform) => platform.id === id);

  return plataform;
};

export default usePlatform;
