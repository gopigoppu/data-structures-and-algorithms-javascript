class MyArray {
    constructor() {
        this.data = {};
        this.length = 0;
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    deleteAtIndex(index){
        const item = this.data[index];
        this.shiftItems(index);
        return item;
    }

    shiftItems(index) {
        for (let i = index; i < this.length; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}




const arr = new MyArray();
arr.push(4);
arr.push(43);
arr.push(47);
arr.push(75);
arr.push(86);
arr.push(99);
arr.push(235);
arr.push(643);
arr.push(7);
arr.pop(); // deleted 7
console.log(arr);
arr.deleteAtIndex(5); // deleted 99
console.log(arr);
