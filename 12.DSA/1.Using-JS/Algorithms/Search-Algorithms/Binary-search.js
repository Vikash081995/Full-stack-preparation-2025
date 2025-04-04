//Binary search eliminates half of the elements in the list in each iteration.
//It is a fast search algorithm with a time complexity of O(log n).
//This algorithm works only on sorted arrays.

function BinarySearch(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== num && start <= end) {
    if (num < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === num ? middle : -1;
}

console.log(BinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)); //4
