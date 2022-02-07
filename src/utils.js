export const mapGoogleBooks = (item) => {
  const {
    title: name,
    authors: creators,
    description,
  } = item.volumeInfo;
  return {
    name,
    creators,
    description,
  };
};

export const remap = (item, dataSource) => {
  switch (dataSource) {
    case "googleBooks":
      return mapGoogleBooks(item);
    default:
      return item;
  }
};
