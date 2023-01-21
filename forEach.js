/**
 * forEach() is a method available on arrays in JavaScript that allows you to iterate over each element of the array and perform a specific action on each element. Here are some examples:
 */


// Basic forEach loop for an array
let array = [1, 2, 3, 4, 5];
array.forEach(element => console.log(element));

// forEach loop with index
let array28 = [1, 2, 3, 4, 5];
array.forEach((element, index) => console.log(`${index}: ${element}`));

// forEach loop with a callback function
let array27 = [1, 2, 3, 4, 5];
function logElement(element) {
    console.log(element);
}
array.forEach(logElement);

// forEach loop with an arrow function and no callback function
let array26 = [1, 2, 3, 4, 5];
array26.forEach(element => console.log(element));

// forEach loop with a thisArg parameter
let array25 = [1, 2, 3, 4, 5];
let thisArg = { name: "John" };
array25.forEach(function (element) {
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
let array24 = [{ name: "John", age: 30 }, { name: "Jane", age: 25 }];
array24.forEach(element => console.log(element.name + " is " + element.age + " years old."));

// forEach loop with a nested array
let array23 = [[1, 2], [3, 4], [5, 6]];
array23.forEach(element => element.forEach(elem => console.log(elem)));


// forEach loop with a 2D array
let array22 = [[1, 2], [3, 4], [5, 6]];
array22.forEach(([a, b]) => console.log(a, b));



// forEach loop with an array of objects and modifying the values
let array21 = [{ name: "John", age: 30 }, { name: "Jane", age: 25 }];
array21.forEach(element => element.age++);
console.log(array);


// forEach loop with an array and using the return value
let array20 = [1, 2, 3, 4, 5];
let newArray = array20.forEach(element => element * 2);
console.log(newArray);


// forEach loop with an array and using the map function
let array19 = [1, 2, 3, 4, 5];
let newArray5 = array19.map(element => element * 2);
console.log(newArray5);


// forEach loop with an array and using the filter function
let array18 = [1, 2, 3, 4, 5];
let newArray4 = array18.filter(element => element % 2 === 0);
console.log(newArray4);


// forEach loop with an array and using the reduce function
let array17 = [1, 2, 3, 4, 5];
let sum = array17.reduce((acc, element) => acc + element);
console.log(sum);


// forEach loop with an array and using the find function
let array16 = [1, 2, 3, 4, 5];
let element = array16.find(element => element % 2 === 0);
console.log(element);


// forEach loop with an array and using the every function
let array15 = [1, 2, 3, 4, 5];
let result = array15.every(element => element % 2 === 1);
console.log(result);

// forEach loop with an array and using the some function
let array14 = [1, 2, 3, 4, 5];
let result2 = array14.some(element => element % 2 === 0);
console.log(result2);


// forEach loop with an array and using the sort function
let array13 = [3, 1, 5, 2, 4];
array13.sort((a, b) => a - b).forEach(element => console.log(element));


// forEach loop with an array and using the reverse function
let array12 = [1, 2, 3, 4, 5];
array12.reverse().forEach(element => console.log(element));


// forEach loop with an array and using the spread operator
let array11 = [1, 2, 3, 4, 5];
[...array11].forEach(element => console.log(element));


// forEach loop with an array and using the spread operator and the push method
let array9 = [1, 2, 3];
let array10 = [4, 5, 6];
[...array9, ...array10].forEach(element => console.log(element));


// forEach loop with an array and using the concat method
let array7 = [1, 2, 3];
let array8 = [4, 5, 6];
let concatenatedArray = array7.concat(array8);
concatenatedArray.forEach(element => console.log(element));


// forEach loop with an array and using the join method
let array6 = [1, 2, 3, 4, 5];
console.log(array6.join(", "));


// forEach loop with an array and using the splice method
let array5 = [1, 2, 3, 4, 5];
array5.splice(1, 2);
array5.forEach(element => console.log(element));


// forEach loop with an array and using the slice method
let array3 = [1, 2, 3, 4, 5];
let newArray3 = array3.slice(1, 3);
newArray3.forEach(element => console.log(element));


// forEach loop with an array and using the for loop
let array4 = [1, 2, 3, 4, 5];
for (let i = 0; i < array4.length; i++) {
    console.log(array4[i]);
}
// It's worth noting that using a forEach loop is more readable than using a for loop in most cases, but in some cases when you need to break or continue the loop or return something from the loop forEach is not the best choice.



