"use strict";
const a = [1, 2, 3, 4, 5];
Object.freeze(a);

console.log(a); // [1, 2, 3, 4, 5]

// Perform the concat
let result = a.concat([6, 7, 8]);

console.log(result); // [1, 2, 3, 4, 5, 6, 7, 8]

// Array.concat is equivalent to doing this...
function equivalentFunction(src, otherArray) {
    var result = new Array(src.length + otherArray.length);
    for(let i = 0; i < src.length; i++) {
        result[i] = src[i];
    }
    for(let i = 0; i < otherArray.length; i++) {
        result[src.length + i] = otherArray[i];
    }
    return result;
}

// result should be the same as with array.concat()
result = equivalentFunction(a, [6, 7, 8]);

console.log(result); // [1, 2, 3, 4, 5, 6, 7, 8]
