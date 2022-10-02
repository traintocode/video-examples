"use strict";
const a = [1, 2, 3, 4, 5];
Object.freeze(a);

console.log(a); // [1, 2, 3, 4, 5]

// Perform the slice
let result = a.slice(2);

console.log(result); // [3, 4, 5]

// Array.slice is equivalent to doing this...
function equivalentFunction(src, from) {
    var result = new Array(src.length - from);
    for(let i = from; i < src.length; i++) {
        result[i - from] = src[i];
    }
    return result;
}

// result should be the same as with array.slice()
result = equivalentFunction(a, 2);

console.log(result); // [3, 4, 5]
