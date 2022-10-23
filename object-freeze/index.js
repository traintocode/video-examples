"use strict"

const a = { name: "object A" };

const b = {
    name: "object B",
    child: a
};

Object.freeze(b);

b.a.name = "Mutable!";



