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
    lookup(value) {
        if (!this.root) {
            return false;
        }
        let currentNode = this.root;
        while (currentNode) {
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                currentNode = currentNode.right;
            } else if (currentNode.value === value) {
                return currentNode;
            }
        }
        return null;
    }

    // remove value in tree
    remove(value) {
        if (!this.root) {
            return false;
        }
        let currentNode = this.root;
        let parentNode = null;
        while (currentNode) {
            if (value < currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.right;
            } else if (currentNode.value === value) {

                // Option 1 : No right child
                if (currentNode.right === null) {
                    if (parentNode === null) {
                        this.root = currentNode.left;
                    } else {
                        if (currentNode.value < parentNode.value) {       // if parent > current value, make current left child a child of parent
                            parentNode.left = currentNode.left;
                        } else if (currentNode.value > parentNode.value) {     // parent < current value, make left child a right child of parent
                            parentNode.right = currentNode.left;
                        }
                    }

                    // Option 2 : Right child which doesnot have a left child
                } else if (currentNode.right.left === null) {
                    currentNode.right.left = currentNode.left;
                    if (parentNode === null) {
                        this.root = currentNode.right;
                    } else {
                        if (currentNode.value < parentNode.value) {   // if parent > current, make right child of the left the parent
                            parentNode.left = currentNode.right;
                        } else if (currentNode.value > parentNode.value) {     // if parent < current, make right child a right child of the parent
                            parentNode.right = currentNode.right;
                        }
                    }

                    // Option 3 : Right child that has a left child
                } else {

                    // Find the Right child's left most child
                    let leftmost = currentNode.right.left; // 10
                    let leftmostParent = currentNode.right; // 7
                    while (leftmost.left !== null) {
                        leftmostParent = leftmost;
                        leftmost = leftmost.left;
                    }

                    // Parent's left subtree is now leftmost's right subtree
                    leftmostParent.left = leftmost.right;
                    leftmost.left = currentNode.left;
                    leftmost.right = currentNode.right;

                    if (parentNode === null) {
                        this.root = leftmost;
                    } else {
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = leftmost;
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = leftmost;
                        }
                    }
                }
                return true;
            }
        }
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
console.log(bst.lookup(15));
console.log(bst.lookup(6));
console.log(bst.lookup(2));
console.log(bst.remove(20))
console.log(bst.remove(6))
console.log(bst.remove(15))
console.log(bst.traverse(bst.root));
console.log(bst);



// https://replit.com/@aneagoie/Data-Structures-Trees#index.js

//       9
//   4       20
// 1   6   15   170