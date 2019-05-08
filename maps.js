const myMap = new Map();

// we can use ref. types and funcs as key
let a = {};
const b = {
    id: 1,
    name: "Majkel"
};

myMap.set(a, 'first object')
    .set(b, 'second object');

const c = () => {};

// delete reference in a variable
delete a;

myMap.set(c, 'function');

const size = myMap.size;

myMap.delete(b);

// we can use for of on map becouse its iterateable
for (const [key, value] of myMap) {
    console.log(key, '=>', value);
}

// Map still holds reference to the object
// as a variable previously
// and because of that, the object cannot be
// removed from memory by GC

// convert to array
const arr = [...myMap];


// WeakMap - with "weak" reference
// primitive types cannot be a key

let myObj = {
    id:1,
    name: "Majk"
}

const weakMap = new WeakMap();

weakMap.set(myObj, 'my object');

console.log(weakMap.has(myObj));

myObj = null;

// or - delete myObj
// because only weak map holds reference
// to the object, it will be released from
// memory by GC and wont be accesible in weak map any more.