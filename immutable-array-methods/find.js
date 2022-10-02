"use strict";
const a = [1, 2, 3, 4, 5];
Object.freeze(a);

console.log(a); // [1, 2, 3, 4, 5]

// Perform the find
let result = a.find(n => n === 3);

console.log(result); // 3

// Array.find is equivalent to doing this...
function equivalentFunction(src, fn) {
    for(let i = 0; i < src.length; i++) {
        if (fn(src[i])) {
            return src[i];
        }
    }
    return result;
}

// result should be the same as with array.find()
result = equivalentFunction(a, n => n === 3);

console.log(result); // 3
