/**
 * for...of and for...in are both loops in JavaScript, but they are used for different purposes.
 * 
 * 
 */


// for...of is used to iterate over the values of an iterable, such as an array or a string. For example:
let array = [1, 2, 3, 4, 5];
for (let value of array) {
    console.log(value);
}
/**
 * This will output:

Copy code
1
2
3
4
5
 */

// for...in is used to iterate over the properties of an object.For example:
let object = { a: 1, b: 2, c: 3 };
for (let key in object) {
    console.log(key + ': ' + object[key]);
}
/**
 * 
 * This will output:

Copy code
a: 1
b: 2
c: 3
 */


// for..of loop for array
let array2 = [1, 2, 3, 4, 5];
for (let value of array2) {
    console.log(value);
}


// for..in loop for objectCopy code
let object2 = { a: 1, b: 2, c: 3 };
for (let key in object2) {
    console.log(key + ': ' + object[key]);
}


// for..of loop for string
let string = "Hello";
for (let value of string) {
    console.log(value);
}

// for..of loop for string with index
let string2 = "Hello";
for (let [index, value] of string2.entries()) {
    console.log(`${index}: ${value}`);
}


// for..in loop for array
let array3 = [1, 2, 3, 4, 5];
for (let index in array3) {
    console.log(`${index}: ${array3[index]}`);
}


// for..of loop for array using break
let array4 = [1, 2, 3, 4, 5];
for (let value of array4) {
    if (value === 3) {
        break;
    }
    console.log(value);
}


// for..of loop for array using continue
let array5 = [1, 2, 3, 4, 5];
for (let value of array) {
    if (value === 3) {
        continue;
    }
    console.log(value);
}


// for..of loop for array using forEach
let array6 = [1, 2, 3, 4, 5];
array6.forEach(value => {
    console.log(value);
});


// for..of loop for array using map
let array7 = [1, 2, 3, 4, 5];
let newArray = array7.map(value => value * 2);
console.log(newArray);


// 11. for..of loop for array using a traditional for loop

let array8 = [1, 2, 3, 4, 5];
for (let i = 0; i < array8.length; i++) {
    console.log(array8[i]);
}


// for..in loop for object using object.values
let object4 = { a: 1, b: 2, c: 3 };
let values = Object.values(object4);
for (let value of values) {
    console.log(value);
}

// for..of loop for array of objects
let array9 = [{ name: "John", age: 30 }, { name: "Jane", age: 25 }];
for (let obj of array9) {
    console.log(obj.name + " is " + obj.age + " years old.");
}

// for..in loop for array of objects
let array10 = [{ name: "John", age: 30 }, { name: "Jane", age: 25 }];
for (let i in array10) {
    console.log(array10[i].name + " is " + array10[i].age + " years old.");
}

// for..of loop for a Set
let set = new Set([1, 2, 3, 4, 5]);
for (let value of set) {
    console.log(value);
}

// for..in loop for a Map
let map = new Map([["a", 1], ["b", 2], ["c", 3]]);
for (let [key, value] of map) {
    console.log(key + ": " + value);
}

// for..of loop for an arguments object
function test() {
    for (let arg of arguments) {
        console.log(arg);
    }
}
test(1, 2, 3);

// for..of loop for a NodeList
let list = document.querySelectorAll("p");
for (let node of list) {
    console.log(node.textContent);
}

// for..of loop for a generator function
function* generator() {
    yield 1;
    yield 2;
    yield 3;
}
for (let value of generator()) {
    console.log(value);
}


// for..in loop for an array - like object
let arrayLike = { 0: "a", 1: "b", 2: "c", length: 3 };
for (let i in Array.from(arrayLike)) {
    console.log(arrayLike[i]);
}
