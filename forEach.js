/**
 * forEach() is a method available on arrays in JavaScript that allows you to iterate over each element of the array and perform a specific action on each element. Here are some examples:
 */


// Basic forEach loop for an array
let array = [1, 2, 3, 4, 5];
array.forEach(element => console.log(element));

// forEach loop with index
let array = [1, 2, 3, 4, 5];
array.forEach((element, index) => console.log(`${index}: ${element}`));

// forEach loop with a callback function
let array = [1, 2, 3, 4, 5];
function logElement(element) {
    console.log(element);
}
array.forEach(logElement);

// forEach loop with an arrow function and no callback function
let array = [1, 2, 3, 4, 5];
array.forEach(element => console.log(element));

// forEach loop with a thisArg parameter
let array = [1, 2, 3, 4, 5];
let thisArg = { name: "John" };
array.forEach(function (element) {
    console.log(this.name + ": " + element);
}, thisArg);


// forEach loop with an object
let object = { a: 1, b: 2, c: 3 };
Object.values(object).forEach(element => console.log(element));

// forEach loop with a string
let string = "Hello";
Array.from(string).forEach(element => console.log(element));

// forEach loop with a NodeList
let list = document.querySelectorAll("p");
Array.from(list).forEach(element => console.log(element.textContent));

// forEach loop with a Set
let set = new Set([1, 2, 3, 4, 5]);
set.forEach(element => console.log(element));

// forEach loop with a Map
let map = new Map([["a", 1], ["b", 2], ["c", 3]]);
map.forEach((value, key) => console.log(key + ": " + value));


// forEach loop with an array of objects
let array = [{ name: "John", age: 30 }, { name: "Jane", age: 25 }];
array.forEach(element => console.log(element.name + " is " + element.age + " years old."));

// forEach loop with a nested array
let array = [[1, 2], [3, 4], [5, 6]];
array.forEach(element => element.forEach(elem => console.log(elem)));


// forEach loop with a 2D array
let array = [[1, 2], [3, 4], [5, 6]];
array.forEach(([a, b]) => console.log(a, b));



// forEach loop with an array of objects and modifying the values
let array = [{ name: "John", age: 30 }, { name: "Jane", age: 25 }];
array.forEach(element => element.age++);
console.log(array);


// forEach loop with an array and using the return value
let array = [1, 2, 3, 4, 5];
let newArray = array.forEach(element => element * 2);
console.log(newArray);


// forEach loop with an array and using the map function
let array = [1, 2, 3, 4, 5];
let newArray = array.map(element => element * 2);
console.log(newArray);


// forEach loop with an array and using the filter function
let array = [1, 2, 3, 4, 5];
let newArray = array.filter(element => element % 2 === 0);
console.log(newArray);


// forEach loop with an array and using the reduce function
let array = [1, 2, 3, 4, 5];
let sum = array.reduce((acc, element) => acc + element);
console.log(sum);


// forEach loop with an array and using the find function
let array = [1, 2, 3, 4, 5];
let element = array.find(element => element % 2 === 0);
console.log(element);


// forEach loop with an array and using the every function
let array = [1, 2, 3, 4, 5];
let result = array.every(element => element % 2 === 1);
console.log(result);

// forEach loop with an array and using the some function
let array = [1, 2, 3, 4, 5];
let result = array.some(element => element % 2 === 0);
console.log(result);


// forEach loop with an array and using the sort function
let array = [3, 1, 5, 2, 4];
array.sort((a, b) => a - b).forEach(element => console.log(element));


// forEach loop with an array and using the reverse function
let array = [1, 2, 3, 4, 5];
array.reverse().forEach(element => console.log(element));


// forEach loop with an array and using the spread operator
let array = [1, 2, 3, 4, 5];
[...array].forEach(element => console.log(element));


// forEach loop with an array and using the spread operator and the push method
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
[...array1, ...array2].forEach(element => console.log(element));


// forEach loop with an array and using the concat method
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let concatenatedArray = array1.concat(array2);
concatenatedArray.forEach(element => console.log(element));


// forEach loop with an array and using the join method
let array = [1, 2, 3, 4, 5];
console.log(array.join(", "));


// forEach loop with an array and using the splice method
let array = [1, 2, 3, 4, 5];
array.splice(1, 2);
array.forEach(element => console.log(element));


// forEach loop with an array and using the slice method
let array = [1, 2, 3, 4, 5];
let newArray = array.slice(1, 3);
newArray.forEach(element => console.log(element));


// forEach loop with an array and using the for loop
let array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
// It's worth noting that using a forEach loop is more readable than using a for loop in most cases, but in some cases when you need to break or continue the loop or return something from the loop forEach is not the best choice.



