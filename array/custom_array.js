class MyArray{
    constructor(){
        this.data = {};
        this.length = 0;
    }

    get(index){
        return this.data[index];
    }

    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }

    pop(){
        const lastItem = this.data[this.length-1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    shiftItems(index){
        
    }
}




const arr = new MyArray();
arr.push(4);
arr.push(43);
arr.push(47);
arr.pop();
console.log(arr);
