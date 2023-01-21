
/**
 * he Array.prototype.map() function is a built-in method in JavaScript that allows you to iterate over an array and create a new array with the same number of elements, but with each element transformed according to a given callback function. Here are 20 examples of use cases for the map() function:
 */
T

// Multiplying all elements in an array by a certain number:
const numbers = [1, 2, 3, 4, 5];
const multiplied = numbers.map(x => x * 2);
console.log(multiplied); // Output: [2, 4, 6, 8, 10]

// Extracting a property from an array of objects:
const people = [
    { name: 'Alice', age: 21 },
    { name: 'Bob', age: 22 },
    { name: 'Charlie', age: 23 },
    { name: 'David', age: 24 },
    { name: 'Eve', age: 21 },
];
const ages = people.map(person => person.age);
console.log(ages); // Output: [21, 22, 23, 24, 21]


// Formatting a timestamp into a human - readable date:
const timestamps = [1598468800, 1604272000, 1610176000];
const dates = timestamps.map(timestamp => new Date(timestamp * 1000).toLocaleString());
console.log(dates); // Output: ["9/8/2022, 12:00:00 AM", "10/8/2022, 12:00:00 AM", "11/8/2022, 12:00:00 AM"]

// Capitalizing the first letter of each word in an array of strings:
const words = ['hello', 'world', 'this', 'is', 'a', 'sentence'];
const capitalized = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
console.log(capitalized); // Output: ["Hello", "World", "This", "Is", "A", "Sentence"]

// Creating an array of square roots from an array of numbers:
const numbers2 = [1, 4, 9, 16, 25];
const squareRoots = numbers.map(Math.sqrt);
console.log(squareRoots); // Output: [1, 2, 3, 4, 5]

// Creating an array of URLs from an array of route names:
const routes = ['home', 'about', 'contact'];
const urls = routes.map(route => `https://example.com/${route}`);
console.log(urls); // Output: ["https://example.com/home", "https://example.com/about", "https://example.com/contact"]


// Creating an array of objects from two arrays of keys and values:
const keys = ['name', 'age', 'gender'];
const values = ['Alice', 25, 'female'];
const obj = keys.map((key, i) => ({ [key]: values[i] }));
console.log(obj); // Output: [{ name: "Alice" }, { age: 25 }, { gender: "female" }]


// Creating an array of CSS class names from an array of boolean values:
const isActive = [true, false, true, false, true];
const classNames = isActive.map(active => active ? 'active' : 'inactive');
console.log(classNames); // Output: ["active", "inactive", "active", "inactive", "active"]


// Creating an array of < li > elements from an array of strings:
const items = ['item 1', 'item 2', 'item 3', 'item 4', 'item 5'];
const elements = items.map(item => `<li>${item}</li>`);
console.log(elements); // Output: ["<li>item 1</li>", "<li>item 2</li>", "<li>item 3</li>", "<li>item 4</li>", "<li>item 5</li>"]


// Creating an array of Fibonacci numbers:
const fibonacci = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
const fibonacciSeries = fibonacci.map((value, index, arr) => index > 1 ? arr[index - 1] + arr[index - 2] : value);
console.log(fibonacciSeries); // Output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]


// Creating an array of the length of each string in an array:
const words2 = ['Hello', 'world', 'this', 'is', 'a', 'sentence'];
const length2 = words.map(word => word.length);
console.log(length); // Output: [


// Creating an array of the first letter of each string in an array:
const words3 = ['Hello', 'world', 'this', 'is', 'a', 'sentence'];
const firstLetters = words3.map(word => word[0]);
console.log(firstLetters); // Output: ["H", "w", "t", "i", "a", "s"]


// Creating an array of the last letter of each string in an array:
const words4 = ['Hello', 'world', 'this', 'is', 'a', 'sentence'];
const lastLetters = words4.map(word => word[word.length - 1]);
console.log(lastLetters); // Output: ["o", "d", "s", "s", "a", "e"]


// Creating an array of the ASCII code of each character in an array of strings:
const words5 = ['Hello', 'world'];
const asciiCodes = words5.map(word => word.split('').map(char => char.charCodeAt(0)));
console.log(asciiCodes); // Output: [[72, 101, 108, 108, 111], [119, 111, 114, 108, 100]]

// Creating an array of the factorial of each number in an array:
const numbers3 = [1, 2, 3, 4, 5];
const factorials = numbers3.map(number => {
    let factorial = 1;
    for (let i = number; i >= 1; i--) {
        factorial *= i;
    }
    return factorial;
});
console.log(factorials); // Output: [1, 2, 6, 24, 120]
// Creating an array of the nth power of each number in an array:
const numbers4 = [1, 2, 3, 4, 5];
const powers = numbers4.map(number => number ** 3);
console.log(powers); // Output: [1, 8, 27, 64, 125]

// Creating an array of the modulo of each number in an array with a given number
const numbers5 = [1, 2, 3, 4, 5];
const modulos = numbers5.map(number => number % 2);
console.log(modulos); // Output: [1,0,1,0,1]

// Creating an array of the quotient of each number in an array with a given number
const numbers6 = [10, 20, 30, 40, 50];
const quotients = numbers6.map(number => number / 5);
console.log(quotients); // Output: [2,4,6,8,10]


// Creating an array of the length of each word in an array of sentence
const sentence = ['Hello world this is a sentence'];
const length = sentence.map(sen => sen.split(" ").map(word => word.length));
console.log(length); // Output: [[5,5,