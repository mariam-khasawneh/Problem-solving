// Q1 : Given an array arr[] of size N, you have to reverse the array using Stack

class Stack {
  constructor() {
    this.items = [];
  }

  add(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  print() {
    console.log(this.items.toString());
  }

  size() {
    return this.items.length;
  }
}

const stack = new Stack();

function reverse(arrayToRevers) {
  let newArr = [];
  for (i = 0; i < arrayToRevers.length; i++) {
    stack.add(arrayToRevers[i]);
  }
  while (stack.size() != 0) {
    newArr.push(stack.pop());
  }
  return newArr;
}

let arr = [1, 2, 3, 4, 5, 6];
console.log(reverse(arr));
