// To create new node which has value and next pointer as null
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// LinkedList implementation
class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    // Add value at end position
    append(value) {
        const newNode = new Node(value);
        console.log('append ==> ', newNode);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    // Add value at start position
    prepend(value) {
        const newNode = new Node(value);
        console.log('prepend ==> ', newNode);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    // Print all values
    printList() {
        const printList = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            printList.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return printList;
    }

    // Insert value at specific index
    insert(index, value) {
        if (index <= 0) {
            return this.prepend(value);
        }
        if (index >= this.length) {
            return this.append(value);
        }
        const newNode = new Node(value);
        const leader = this.traverseToIndex(index - 1);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this.printList();
    }

    // Remove value at specific index
    remove(index) {
        const leader = this.traverseToIndex(index - 1);
        const deleteIndexNode = leader.next;
        leader.next = deleteIndexNode.next;
        this.length--;
        return this.printList();
    }

    // Visit specific index of node in list and return
    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    // Reverse the LinkedList Values
    reverse() {
        if (!this.head.next) {
            return this.head;
        }
        let first = this.head;
        let second = first.next;
        this.tail = this.head; // set tail value to head to swap last and first initially
        while (second) {
            const temp = second.next; // 
            second.next = first; // pointer changing  e.g from 8 -> 9 to 9 -> 8
            first = second;
            second = temp;
        }
        this.head.next = null; // changes to tail and set next as null
        this.head = first; // changes last value to head
        return this.printList();
    }
}

// While loop execution -> pointer changing and value swap to loop condition
// [ 8 <- 9, (9, 11) ]
// [ 8 <- 9 <- 11, (11, 12) ]
// [ 8 <- 9 <- 11 <- 12, (12, null) ]



let myLinkedList = new LinkedList(10);
myLinkedList.append(11);
myLinkedList.append(12);
myLinkedList.prepend(8);
console.log(myLinkedList.printList());
console.log(myLinkedList.traverseToIndex(1));
console.log(myLinkedList.insert(1, 9));
console.log(myLinkedList.remove(2));
console.log(myLinkedList.printList());
console.log(myLinkedList.reverse());
console.log(myLinkedList);