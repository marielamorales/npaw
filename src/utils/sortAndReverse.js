export const sortAndReverse = (arr) => {
  const sortedAndReversed = arr
    .sort((a, b) => new Date(a.releaseDate) - new Date(b.releaseDate))
    .reverse();

  return sortedAndReversed;
};

//here we have a sorting and reversing function in order to handle the data we want to extract.
