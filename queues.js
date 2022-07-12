class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queues {
  constructor(value) {
    const node = new Node(value);
    this.head = node;
    this.head.next = null;

    this.tail = this.head;
    this.tail.next = null;

    this.length = 1;
  }

  enqueue(value) {
    const node = new Node(value);
    this.tail.next = node;
    this.tail = node;
    this.length++;
    return this;
  }

  dequeue() {
    this.head = this.head.next;
    this.length--;
    return this;
  }

  printQueues() {
    let currentNode = this.head;
    let counter = 0;
    let queueList = [];
    while (counter != this.length) {
      queueList.push(currentNode.value);
      currentNode = currentNode.next;
      counter++;
    }
    console.log(queueList);
  }
}

const queues = new Queues(10);
queues.enqueue(20);
queues.enqueue(30);
queues.enqueue(40);
queues.enqueue(50);
queues.enqueue(60);
queues.dequeue();
queues.dequeue();
queues.printQueues();
console.log(queues);
