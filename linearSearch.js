function linearSearch(searchTerm, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchTerm) {
      return i;
    }
  }
  return undefined;
}

function globalLinearSearch(searchTerm, arr) {
  const term_indices = [];
  arr.forEach((element, ind) => {
    if (element === searchTerm) {
      term_indices.push(ind);
    }
  });

  return term_indices.length > 0 ? term_indices : undefined;
}

module.exports = { linearSearch, globalLinearSearch };
