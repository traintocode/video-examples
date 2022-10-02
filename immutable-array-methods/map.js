"use strict";
const a = [1, 2, 3, 4, 5];
Object.freeze(a);

console.log(a); // [1, 2, 3, 4, 5]

// Perform the map
let result = a.map(n => n * 2);

console.log(result); // [2, 4, 6, 8, 10]

// Array.map is equivalent to doing this...
function equivalentFunction(src, fn) {
    var result = new Array(src.length);
    for(let i = 0; i < src.length; i++) {
        result[i] = fn(src[i]);
    }
    return result;
}

// result should be the same as with array.map()
result = equivalentFunction(a, n => n * 2);

console.log(result); // [2, 4, 6, 8, 10]
