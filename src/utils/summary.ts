export const getSearchIndex = (index: number, findKeywordCount: number) => {
  if (findKeywordCount === 0) {
    return -1;
  } else if (index < 0) {
    return findKeywordCount - 1;
  } else if (index >= findKeywordCount) {
    return 0;
  } else {
    return index;
  }
};
