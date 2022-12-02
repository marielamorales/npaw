export const sortAndReverse = (arr) => {
  const sortedAndReversed = arr
    .sort((a, b) => new Date(a.releaseDate) - new Date(b.releaseDate))
    .reverse();

  return sortedAndReversed;
};

export const filteredArray = (arr) => {
  const filteredArray = arr.includes("2021");
  return filteredArray;
};
