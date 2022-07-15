class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    // Adds an element to the queue according to its prioity
    enqueue(value, priority) {
        let node = new Node(value, priority);
        let contains = false;
        for (let i = 0; i < this.queue.length; i++) {
            if (this.queue[i].priority > priority) {
                this.queue.splice(i, 0, node);
                contains = true;
                break;
            }
        }
        if (!contains) {
            this.queue.push(node);
        }
        return this.queue;
    }

    // Removes an element from the priority queue
    // This function removes an element from the front of a queue as the highest priority element is stored at the front of the priority queue
    dequeue() {
        if (this.queue.length > 0) {
            return this.queue.shift();
        } else {
            return "Empty Queue";
        }
    }

    // returns front element of the priority queue
    front() {
        if (this.queue.length > 0) {
            return this.queue[0];
        } else {
            return "Empty Queue";
        }
    }

    // returns last element of the priority queue
    rear() {
        if (this.queue.length > 0) {
            return this.queue[this.queue.length - 1];
        } else {
            return "Empty Queue";
        }
    }

    // prints the element of the queue as per priority
    printPriorityQueue() {
        let str = '';
        for (let i = 0; i < this.queue.length; i++) {
            str += this.queue[i].value + ' ';
        }
        return str;
    }


}

const pq = new PriorityQueue();
pq.enqueue(3, 1);
pq.enqueue(6, 3);
pq.enqueue(9, 5);
pq.enqueue(10, 3);
pq.enqueue(11, 4);
console.log(pq);
pq.dequeue();
console.log(pq.front());
console.log(pq.rear());
console.log(pq.printPriorityQueue());
console.log(pq);