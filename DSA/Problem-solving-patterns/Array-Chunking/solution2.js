function chunked(array, size) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }
  return chunked;
}
console.log(chunked([1, 2, 3, 4, 5, 6, 7, 8], 3));
  