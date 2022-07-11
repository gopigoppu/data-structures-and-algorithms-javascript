class QueueUsingStack {
    constructor() {
        this.first = [];
        this.last = [];
        this.length = 0;
    }

    enqueue(value) {
        const length = this.first.length;
        for (let i = 0; i < length; i++) {
            this.last.push(this.first.pop());
        }
        this.last.push(value);
        return this;
    }

    dequeue() {
        const length = this.last.length;
        for (let i = 0; i < length; i++) {
            this.first.push(this.last.pop());
        }
        this.first.pop();
        return this;
    }

    peek() {
        if (this.last.length > 0) {
            return this.last[0];
        }
        if (this.first.length > 0) {
            return this.first[this.first.length - 1];
        }
        return null;
    }
}


const queueUsingStack = new QueueUsingStack();
queueUsingStack.enqueue(4);
console.log(queueUsingStack.peek());
queueUsingStack.enqueue(5);
queueUsingStack.dequeue();
queueUsingStack.enqueue(6);
console.log(queueUsingStack.peek());
queueUsingStack.enqueue(7);
console.log(queueUsingStack.peek());
queueUsingStack.dequeue();
console.log(queueUsingStack.peek());
queueUsingStack.dequeue();
console.log(queueUsingStack.peek());
queueUsingStack.dequeue();
console.log(queueUsingStack.peek());