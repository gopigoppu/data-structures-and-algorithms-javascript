// New Node for Doubly Linked List
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

// Doubly Linked List 
class DoublyLinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    // Add new node value at end of list
    append(value) {
        const newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    // Add new node value at begining of List
    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }

    // Print all values in List
    printList() {
        const list = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            list.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return list;
    }

    // Insert value at specific index in list
    insert(index, value) {
        if (index <= 0) {
            return this.prepend(value);
        }
        if (index >= this.length) {
            return this.append(value);
        }
        const newNode = new Node(value);

        const leader = this.traverseToIndex(index - 1);
        const follower = leader.next;

        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = follower;
        follower.prev = newNode;

        this.length++;
        return this.printList();
    }

    // Remove value at specific index in list
    remove(index) {
        if (index >= 0 && index < this.length) {
            const leader = this.traverseToIndex(index - 1);
            const deleteIndexNode = leader.next;
            const follower = deleteIndexNode.next;
            leader.next = follower;
            // If last index need to be deleted, follower will be null. So check follower value exist before assinging
            if (follower) {
                follower.prev = leader;
            }
            this.length--;
        }
        return this.printList();
    }

    // Find node for given index
    traverseToIndex(index) {
        let currentNode = this.head;
        let counter = 0;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

}



let doublyLinkedList = new DoublyLinkedList(10);
doublyLinkedList.append(11);
doublyLinkedList.append(12);
doublyLinkedList.append(13);
doublyLinkedList.prepend(9);
doublyLinkedList.insert(0, 8);
doublyLinkedList.insert(6, 14);
console.log("List ==> ", doublyLinkedList.printList());
console.log(doublyLinkedList.traverseToIndex(2));
console.log(doublyLinkedList.insert(2, 22));
console.log(doublyLinkedList.remove(6));
console.log(doublyLinkedList);