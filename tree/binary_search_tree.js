class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


// Binary Search Tree ( BST )

class BinarySearchTree {
    constuctor() {
        this.root = null;
    }

    // Insert value in BST
    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        } else {
            let currentNode = this.root;
            while (true) {
                if (value < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }

        }
    }

    // lookup value in tree
    lookup(value){
        
    }

    // Travers a Tree
    traverse(currentNode) {
        const tree = { value: currentNode.value };
        tree.left = currentNode.left === null ? null : this.traverse(currentNode.left);
        tree.right = currentNode.right === null ? null : this.traverse(currentNode.right);
        return tree;
    }
}

const bst = new BinarySearchTree();
bst.insert(9);
bst.insert(4);
bst.insert(20);
bst.insert(6);
bst.insert(1);
bst.insert(15);
bst.insert(170);
console.log(bst.traverse(bst.root));
console.log(bst);



// https://replit.com/@aneagoie/Data-Structures-Trees#index.js

//       9
//   4       20
// 1   6   15   170