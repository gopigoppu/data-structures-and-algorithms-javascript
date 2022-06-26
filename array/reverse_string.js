// Array backward push
function reverse(str){
    if(!str || typeof str != 'string' || str.length < 2 ) return str;

    const backwards = [];
    const totalItems = str.length -1;
    for(let i = totalItems; i >= 0; i--){
        backwards.push(str[i]);
    }
    return backwards.join('');
}

// Array reverse() method usage
function reverse2(str){
    console.log(str.split(''));
    return str.split('').reverse().join('');
}

// spread operator Array reverse()
// spread operator on a string seems to be the same as using .split('').
const reverse3 = str => [...str].reverse().join('');


reverse('welcome to js diet');
reverse2('welcome to js diet');
reverse3('welcome to js diet');