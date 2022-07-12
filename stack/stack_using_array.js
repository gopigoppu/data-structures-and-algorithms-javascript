class Stack {
    constructor() {
        this.data = [];
    }

    peek() {
        return this.data[this.data.length - 1];
    }

    push(value) {
        this.data.push(value);
        return this;
    }

    pop() {
        this.data.pop();
        return this;
    }
}


const stackQueue = new Stack();
stackQueue.push(5);
stackQueue.push(6);
stackQueue.push(7);
console.log(stackQueue.peek());
stackQueue.pop();
console.log(stackQueue);
console.log(new Date())
