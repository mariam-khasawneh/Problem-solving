// Q3 : Create a function to find the sum of an array of integers using recursion .

function sumArray(arr) {
  if (arr.length === 0) {
    return 0;
  }

  return arr[0] + sumArray(arr.slice(1));
}
const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //1, 2, 3, 4, 5, 6, 7, 8, 9, 10
const array2 = [1, 2, 3, 4, -5];
const array3 = [];

console.log(sumArray(array1)); // Output: 55
console.log(sumArray(array2)); // Output: 5
console.log(sumArray(array3)); // Output: 0
