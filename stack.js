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
