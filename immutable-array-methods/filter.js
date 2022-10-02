"use strict";
const a = [1, 2, 3, 4, 5];
Object.freeze(a);

console.log(a); // [1, 2, 3, 4, 5]

// Perform the filter
let result = a.filter(n => n % 2 === 0);

console.log(result); // [2, 4]

// Array.filter is equivalent to doing this...
function equivalentFunction(src, predicate) {
    var result = new Array();
    for(let i = 0; i < src.length; i++) {
        if (predicate(src[i])) {
            result.push(src[i]);
        }
    }
    return result;
}

// result should be the same as with array.filter()
result = equivalentFunction(a, n => n % 2 === 0);

console.log(result); // [2, 4]
