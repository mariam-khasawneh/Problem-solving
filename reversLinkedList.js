// Q4 : Create a function that takes a LinkedList and reverses it

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  append(value) {
    let node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let current = this.head;
      let list = ``;
      while (current) {
        list += `${current.value} -> `;
        current = current.next;
      }
      console.log(`LinkedList : ${list} null`);
    }
  }

  reverse() {
    let prev = null;
    let curr = this.head;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }

}
const linkedList = new LinkedList();

console.log(linkedList.isEmpty());
linkedList.append(50);
linkedList.append(20);
linkedList.append(80);
linkedList.append(60);
linkedList.append(50);
linkedList.append(80);
linkedList.append(60);
linkedList.append(50);
console.log(linkedList.getSize());
linkedList.print();
linkedList.reverse();
linkedList.print();
