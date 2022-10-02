"use strict";
const a = [1, 2, 3, 4, 5];
Object.freeze(a);

console.log(a); // [1, 2, 3, 4, 5]

// Perform the reduce
let result = a.reduce((accumulator, item) => accumulator + item, 0);

console.log(result); // 15

// Array.reduce is equivalent to doing this...
function equivalentFunction(src, fn, initial) {
    var result = initial;
    for(let i = 0; i < src.length; i++) {
        result = fn(result, src[i]);
    }
    return result;
}

// result should be the same as with array.reduce()
result = equivalentFunction(a, (prev, curr) => prev + curr, 0);

console.log(result); // 15
