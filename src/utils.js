export const findItems = (items) => {
  if (items.data) {
    return items.data;
  }
  return items;
};

export const mapGoogleBooks = (item) => {
  const {
    title: name,
    authors: creators,
    description,
  } = item.volumeInfo;
  const remapped = {
    name,
    creators,
    description,
  };
  remapped.id = item.id;
  return remapped;
};

export const mapLastFmAlbums = (item) => {
  const {
    name,
    artist,
    mbid: id,
    url,
    image,
    catno: catalogNumber,
    year: dateCreated,
  } = item;
  const bigImage = image[3]["#text"].length > 0
    ? image[3]["#text"]
    : "http://placehold.it/320x320";
  const creators = [artist.name];
  const remapped = {
    dateCreated,
    id,
    name,
    creators,
    url,
    image: bigImage,
    catalogNumber,
  };
  return remapped;
};

export const uniquey = (text) => {
  const rand = Math.floor(Math.random() * 100000);
  const unique = `${text.toLowerCase().replace(" ", "-")}-${rand})}`;
  return unique;
};

export const remap = (item, dataSource) => {
  switch (dataSource) {
    case "googleBooks":
      return mapGoogleBooks(item);
    case "lastFmAlbums":
      return mapLastFmAlbums(item);
    default:
      return item;
  }
};
