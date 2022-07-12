<h4>When should we use Array and Linked list to implement Stack and Queue?</h4>
<p>We can use Array and Linked list to implement stack and queue. But if we look at the efficiency and time complexity we have to choose the best option to implement both of them.</p>
<p>The array is the best option to maintain the stack and the Linked list is the best for the queue.</p>
<p>Stack is a list of data that follows LIFO (Last in first out) order.</p>
<p>We will use <b>Array</b> to maintain stack and discuss with an example why array is best for it.</p>
<p>If we push and pop any data in an array the time complexity for push and pop is O(1)</p>

```javascript
class Stack {
  constructor() {
    this.stackElements = [];
  }
  push(value) {
    this.stackElements.push(value);
  }

  pop() {
    this.stackElements.pop();
  }

  printStack() {
    console.log(this.stackElements);
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);
stack.push(60);
stack.pop();
stack.printStack();
```

<p>Output</p>

```
[ 10, 20, 30, 40, 50 ]
```

<p>O(1) is the best and lowest time complexity here and we don't need to update the position of other elements of the array. For that reason, the array is the best option for stack.</p>

<p>On the other hand the queue is the list of data that follows the FIFO (first in first out) order.</p>
<p>Here Linked list is the best choice to handle queues.</p>
<p>If we use the array to handle queue when we will remove an element from the first index of the array then we have to update the other element's index position. It's time complexity O(n)</p>
<p>When we will use the Linked list we'll have the reference of the next node. After removing the first/head node we can easily make the next node as head/first node. Here the time complexity is O(1) and no need to update the other node.</p>

```javascript
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
    if (this.length != 0) {
      this.head = this.head.next;
      this.length--;
      return this;
    }
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
```

<p>Output</p>

```
[ 30, 40, 50, 60 ]
```

<p><b>Stack use Array</b></p>
<p><b>Queue use Linked list</b></p>
