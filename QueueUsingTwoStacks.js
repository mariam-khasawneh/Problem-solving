// Q2 : Implementing a Queue Data Structure using Two Stacks

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

  isEmpty() {
    if (this.size() == 0) {
      return true;
    } else {
      return false;
    }
  }
}

class Queue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  size() {
    console.log(this.stack1.size() + this.stack2.size());
  }

  isEmpty() {
    if (this.stack1.size() + this.stack2.size() == 0) {
      console.log(true);
    } else {
      console.log(false);
    }
  }

  enqueue(element) {
    this.stack1.add(element);
  }

  dequeue() {
    if (this.stack1.isEmpty() && this.stack2.isEmpty()) {
      return null;
    } else if (this.stack2.isEmpty()) {
      while (!this.stack1.isEmpty()) {
        this.stack2.add(this.stack1.pop());
      }
      return this.stack2.pop();
    } else if (!this.stack2.isEmpty()) {
      return this.stack2.pop();
    }
  }

  print() {
    let finalResult = "";
    if (this.stack2.isEmpty()) {
      finalResult += this.stack1.items;
    } else if (!this.stack2.isEmpty()) {
      finalResult += this.stack2.items.reverse() + "," + this.stack1.items;
    }

    console.log(finalResult);
  }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(`enqued : ${queue.dequeue()}`);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
console.log(`enqued : ${queue.dequeue()}`);
queue.enqueue(7);
queue.enqueue(8);
queue.enqueue(9);
console.log(`enqued : ${queue.dequeue()}`);
queue.print();
queue.enqueue(10);
queue.enqueue(11);
queue.enqueue(12);
console.log(`enqued : ${queue.dequeue()}`);
queue.enqueue(13);
queue.enqueue(14);
queue.enqueue(15);

queue.print();
