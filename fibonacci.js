// Fibonacci
function fibonacci(n, arr = [0, 1]) {
  if (arr.length >= n) return arr.slice(0, n);
  const newNum = arr.at(-1) + arr.at(-2);
  arr.push(newNum);
  return fibonacci(n, arr);
}

// Merge Sort
function mergeSort(arr) {
  if (arr.length < 2) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

// Helper function: merge
function merge(left, right) {
  const sortedArr = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sortedArr.push(left.shift());
    } else sortedArr.push(right.shift());
  }
  return [...sortedArr, ...left, ...right];
}
// Node Input Text Filed
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Pick a number between 0 and 50 to be safe.\n', (num) => {
  try {
    console.log(mergeSort(fibonacci(num)));
  } catch {
    console.log('that was not in range of expected answers');
  }
  readline.close();
});
