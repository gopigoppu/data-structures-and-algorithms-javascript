// New Node creation for reusability
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Stack using Linked List
class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }

    push(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.top) {
            return null;
        }
        this.top = this.top.next;
        this.length--;
        return this;
    }
}


const stack = new Stack();
stack.push(5);
stack.push(6);
console.log(stack.peek());
stack.push(7);
console.log(stack.peek());
stack.pop()
console.log(stack.peek());
console.log(stack);