'use strict';

var myObject = {
    name: "James", 
    value: 1,
};

Object.freeze(myObject);

myObject.name = "Something else";
