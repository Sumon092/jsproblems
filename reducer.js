/**
 * The Array.prototype.reduce() function, also known as the reduce() function or simply reduce, is a built-in method in JavaScript that allows you to iterate over an array and reduce it to a single value. This function takes two arguments: a callback function and an initial value. The callback function is called for each element in the array and it takes two arguments: an accumulator and the current value. The accumulator is the value returned from the previous iteration and is initialized to the initial value. The current value is the current element being processed.

Here are a few examples of use cases for the reduce() function:
 */

// Summing an array of numbers:

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 15

// Flattening an array of arrays:

const nestedArr = [[1, 2], [3, 4], [5, 6]];
const flatArr = nestedArr.reduce((acc, curr) => acc.concat(curr), []);
console.log(flatArr); // Output: [1, 2, 3, 4, 5, 6]

// Counting the occurrences of elements in an array:

const fruits = ['apple', 'banana', 'apple', 'orange', 'banana'];
const count = fruits.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
}, {});
console.log(count); // Output: { apple: 2, banana: 2, orange: 1 }


// Grouping elements in an array by a certain property:
const people = [
    { name: 'Alice', age: 21 },
    { name: 'Bob', age: 22 },
    { name: 'Charlie', age: 23 },
    { name: 'David', age: 24 },
    { name: 'Eve', age: 21 },
];
const groupedByAge = people.reduce((acc, curr) => {
    if (!acc[curr.age]) {
        acc[curr.age] = [];
    }
    acc[curr.age].push(curr);
    return acc;
}, {});
console.log(groupedByAge);
/* Output: 
{
    21: [
        { name: 'Alice', age: 21 },
        { name: 'Eve', age: 21 },
    ],
    22: [
        { name: 'Bob', age: 22 },
    ],
    23: [
        { name: 'Charlie', age: 23 },
    ],
    24: [
        { name: 'David', age: 24 },
    ],
}
*/

// Finding the max value in an array:
const numbers2 = [1, 5, 10, 15, 20];
const max = numbers2.reduce((acc, curr) => Math.max(acc, curr), Number.MIN_SAFE_INTEGER);
console.log(max); // Output: 20


// Finding the min value in an array:
const numbers3 = [1, 5, 10, 15, 20];
const min = numbers3.reduce((acc, curr) => Math.min(acc, curr), Number.MAX_SAFE_INTEGER);
console.log(min); // Output: 1

// Removing duplicates from an array:
const numbers4 = [1, 2, 2, 3, 3, 4, 4, 5, 5];
const unique = numbers4.reduce((acc, curr) => {
    if (!acc.includes(curr)) {
        acc.push(curr);
    }
    return acc;
}, []);
console.log(unique); // Output: [1, 2, 3, 4, 5]


// Converting an array of objects to an object keyed by a certain property:

const people2 = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
    { id: 4, name: 'David' },
];
const obj = people2.reduce((acc, curr) => {
    acc[curr.id] = curr;
    return acc;
}, {});
console.log(obj);
/* Output: 
{
    1: { id: 1, name: 'Alice' },
    2: { id: 2, name: 'Bob' },
    3: { id: 3, name: 'Charlie' },
    4: { id: 4, name: 'David' },
}
*/

// Creating a frequency counter for an array of values:
const values = [1, 2, 3, 3, 4, 4, 4, 5, 5, 5, 5];
const counter = values.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
}, {});
console.log(counter); // Output: { 1: 1, 2: 1, 3: 2, 4: 3, 5: 4 }


// Creating a histogram for an array of values:
const values2 = [1, 2, 3, 3, 4, 4, 4, 5, 5, 5, 5];
const histogram = values2.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
}, {});
console.log(histogram); // Output: { 1: 1, 2: 1, 3: 2, 4: 3, 5: 4 }


// Joining an array of strings:
const words = ['Hello', 'world', '!'];
const sentence = words.reduce((acc, curr) => acc + ' ' + curr);
console.log(sentence); // Output: "Hello world!"


// Summing up values in an array of objects:
const items = [
    { name: 'item1', value: 10 },
    { name: 'item2', value: 20 },
    { name: 'item3', value: 30 },
    { name: 'item4', value: 40 }
];
const total = items.reduce((acc, curr) => acc + curr.value, 0);
console.log(total); // Output: 100

// Creating an object from an array of key-value pairs:
const kvpairs = [
    ['name', 'John Doe'],
    ['age', 30],
    ['gender', 'male']
];
const obj2 = kvpairs.reduce((acc, curr) => {
    acc[curr[0]] = curr[1];
    return
});


// Filtering an array of objects based on a certain condition:
const objects = [
    { name: 'Bob', age: 30 },
    { name: 'Alice', age: 25 },
    { name: 'Charlie', age: 35 },
    { name: 'David', age: 40 },
];
const filtered = objects.reduce((acc, curr) => {
    if (curr.age >= 30) {
        acc.push(curr);
    }
    return acc;
}, []);
console.log(filtered);
/* Output: 
[
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 },
    { name: 'David', age: 40 },
]
*/
// Finding the longest word in an array of strings:
const words2 = ['Hello', 'world', 'this', 'is', 'a', 'sentence'];
const longest = words2.reduce((acc, curr) => {
    if (curr.length > acc.length) {
        acc = curr;
    }
    return acc;
}, '');
console.log(longest); // Output: 'sentence'






