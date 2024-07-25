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
  const bigImage =
    image[3]["#text"].length > 0
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

export const formatDateToLocal = (dateStr, locale = "en-US") => {
  const date = new Date(dateStr);
  const options = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };
  const formatter = new Intl.DateTimeFormat(locale, options);
  const formatted = formatter.format(date);
  return formatted;
};

export const generatePagination = (currentPage, totalPages) => {
  // If the total number of pages is 7 or less,
  // display all pages without any ellipsis.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // If the current page is among the first 3 pages,
  // show the first 3, an ellipsis, and the last 2 pages.
  if (currentPage <= 3) {
    return [1, 2, 3, "...", totalPages - 1, totalPages];
  }

  // If the current page is among the last 3 pages,
  // show the first 2, an ellipsis, and the last 3 pages.
  if (currentPage >= totalPages - 2) {
    return [1, 2, "...", totalPages - 2, totalPages - 1, totalPages];
  }

  // If the current page is somewhere in the middle,
  // show the first page, an ellipsis, the current page and its neighbors,
  // another ellipsis, and the last page.
  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ];
};
