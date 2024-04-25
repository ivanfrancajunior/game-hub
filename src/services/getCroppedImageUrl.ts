const getCroppedImageUrl = (url: string) => {
  if (!url) return url;
  const target = "media/";
  const source = url;
  const index = source.indexOf(target) + target.length;
  return source.slice(0, index) + "crop/600/400/" + source.slice(index);
};

export default getCroppedImageUrl;
