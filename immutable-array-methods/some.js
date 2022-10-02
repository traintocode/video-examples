"use strict";
const a = [1, 2, 3, 4, 5];
Object.freeze(a);

console.log(a); // [1, 2, 3, 4, 5]

// Perform the some
let result = a.some(n => n === 3);

console.log(result); // true

// Array.some is equivalent to doing this...
function equivalentFunction(src, fn) {
    for(let i = 0; i < src.length; i++) {
        if (fn(src[i])) {
            return true;
        }
    }
    return false;
}

// result should be the same as with array.some()
result = equivalentFunction(a, n => n === 3);

console.log(result); // true
