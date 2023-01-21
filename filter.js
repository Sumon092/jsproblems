

// Filter an array of numbers to only include even numbers:

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers); // [2, 4, 6, 8, 10]


// Filter an array of objects to only include those with a certain property value:
const employees = [
    { name: "John", department: "HR" },
    { name: "Jane", department: "IT" },
    { name: "Bob", department: "HR" },
    { name: "Sara", department: "IT" }
];
const hrEmployees = employees.filter(employee => employee.department === "HR");
console.log(hrEmployees); // [{ name: "John", department: "HR" }, { name: "Bob", department: "HR" }]

// Filter an array of strings to only include those that are longer than a certain length:
const words = ["cat", "dog", "elephant", "giraffe", "lion"];
const longWords = words.filter(word => word.length > 5);
console.log(longWords); // ["elephant", "giraffe"]


// Filter an array of numbers to only include those greater than a certain value:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const largeNumbers = numbers.filter(number => number > 5);
console.log(largeNumbers); // [6, 7, 8, 9, 10]


// Filter an array of objects to only include those with a specific property:
const products = [
    { name: "Apples", price: 0.99, inStock: true },
    { name: "Bananas", price: 0.79, inStock: false },
    { name: "Oranges", price: 0.89, inStock: true },
    { name: "Pears", price: 0.69, inStock: true }
];
const inStockProducts = products.filter(product => product.inStock === true);
console.log(inStockProducts); // [{ name: "Apples", price: 0.99, inStock: true }, { name: "Oranges", price: 0.89, inStock: true }, { name: "Pears", price: 0.69, inStock: true }]


// Filter an array of object to only include those with specific property value
const students = [
    { name: "John", age: 20, gender: "male" },
    { name: "Jane", age: 22, gender: "female" },
    { name: "Bob", age: 25, gender: "male" },
    { name: "Sara", age: 28, gender: "female" }
];
const maleStudents = students.filter(student => student.gender === "male");
console.log(maleStudents); // [{ name: "John", age: 20, gender: "male" }, { name: "Bob", age: 25, gender: "




// Filter an array of object to only include those with specific property value
const cars = [
    { make: "Ford", model: "Mustang", year: 2020 },
    { make: "Chevy", model: "Camaro", year: 2019 },
    { make: "Tesla", model: "Model S", year: 2021 },
    { make: "BMW", model: "M3", year: 2020 }
];
const carsFrom2020 = cars.filter(car => car.year === 2020);
console.log(carsFrom2020); // [{ make: "Ford", model: "Mustang", year: 2020 }, { make: "BMW", model: "M3", year: 2020 }]


// Filter an array of strings to only include those that start with a certain letter:

const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
const fruitsStartingWithC = fruits.filter(fruit => fruit[0] === "C");
console.log(fruitsStartingWithC); // ["Cherry"]


// Filter an array of objects to only include those that have a specific property value:
const books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Fiction" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", genre: "Fiction" },
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", genre: "Fantasy" }
];
const fictionBooks = books.filter(book => book.genre === "Fiction");
console.log(fictionBooks); // [{ title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction" }, { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Fiction" }, { title: "The Catcher in the Rye", author: "J.D. Salinger", genre: "Fiction" }]


// Filter an array of numbers to only include those that are divisible by a certain number:

const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const divisibleByFive = numbers.filter(number => number % 5 === 0);
console.log(divisibleByFive); // [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

// Filter an array of objects to only include those that have a specific property value:
const orders = [
    { customer: "John Smith", items: ["Shirt", "Pants", "Socks"], shipped: true },
    { customer: "Jane Doe", items: ["Dress", "Bag"], shipped: false },
    { customer: "Bob Johnson", items: ["Shirt", "Pants", "Socks"], shipped: true },
    { customer: "Sara Lee", items: ["Shoes", "Bag"], shipped: false }
];
const unshippedOrders = orders.filter(order => order.shipped === false);
console.log(unshippedOrders); // [{ customer: "Jane Doe", items: ["Dress", "Bag"], shipped: false }, { customer: "Sara Lee", items: ["Shoes", "Bag"], shipped: false }]


// Filter an array of objects to only include those that have a property value above a certain threshold

const products = [
    { name: "product1", price: 10,  quantity:5},
    { name: "product2", price: 20,  quantity:8},
    { name: "product3", price: 15,  quantity:2},
    { name: "product4", price: 30,  quantity:12}
];
const highStockProducts = products.filter(product => product.quantity > 5);
console.log(highStockProducts); // [{ name: "product2", price: 20,  quantity:8}, { name: "product4", price: 30,  quantity:12}]

// Filter an array of objects to only include those that have a property value match a certain string
const products = [
    { name: "product1", category: "Electronics" },
    { name: "product2", category: "Furniture" },
    { name: "product3", category: "Electronics" },
    { name: "product4", category: "Appliances" }
];
const electronicsProducts = products.filter(product => product.category === "Electronics");
console.log(electronicsProducts); // [{ name: "product1", category: "Electronics" }, { name: "product3", category: "Electronics" }]


// Filter an array of numbers to only include those that are prime numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNumbers = numbers.filter(number => {
    if (number < 2) return false;
    for (let i = 2; i < number; i++) {
        if (number % i === 0) return false;
    }
    return true;
});
console.log(primeNumbers); // [2, 3, 5, 7]


// Filter an array of objects to only include those that have a property value within a certain range
const products = [
    { name: "product1", price: 15 },
    { name: "product2", price: 20 },
    { name: "product3", price: 25 },
    { name: "product4", price: 30 }
];
const affordableProducts = products.filter(product => product.price <= 25);
console.log(affordableProducts); // [{ name: "product1", price: 15 }, { name: "product2", price: 20 }, { name: "product3", price: 25 }]


// Filter an array of objects to only include those that have a property value match a certain regular expression
const names = ["John", "Jane", "Bob", "Sara", "Alex"];
const namesStartingWithJ = names.filter(name => /^J/i.test(name));
console.log(namesStartingWithJ); // ["John", "Jane"]


// Filter an array of objects to only include those that have a property value match a certain substring
const countries = ["United States", "United Kingdom", "France", "Germany", "Spain"];
const countriesWithUnited = countries.filter(country => country.includes("United"));
console.log(countriesWithUnited); // ["United States", "United Kingdom"]

// Filter an array of objects to only include those that have a specific property value:
const cars = [
    { make: "Ford", model: "Mustang", color: "red" },
    { make: "Chevy", model: "Camaro", color: "blue" },
    { make: "Tesla", model: "Model S", color: "black" },
    { make: "BMW", model: "M3", color: "red" }
];
const redCars = cars.filter(car => car.color === "red");
console.log(redCars); // [{ make: "Ford", model: "Mustang", color: "red" }, { make: "BMW", model: "M3", color: "red" }]


// Filter an array of objects to only include those that have a property value within a certain range:
const products = [
    { name: "product1", price: 10 },
    { name: "product2", price: 20 },
    { name: "product3", price: 30 },
    { name: "product4", price: 40 }
];
const affordableProducts = products.filter(product => product.price >= 20 && product.price <= 30);
console.log(affordableProducts); // [{ name: "product2", price: 20 }, { name: "product3", price: 30 }]


// Filter an array of objects to only include those that have a property value that is an instance of a certain class:
const objects = [
    { name: "object1", value: "hello" },
    { name: "object2", value: 123 },
    { name: "object3", value: true },
    { name: "object4", value: new Date() }
];
const stringObjects = objects.filter(object => object.value instanceof String);
console.log(stringObjects); // [{ name: "object1", value: "hello" }]


// Filter an array of objects to only include those that have a property value that is an array with a certain length
const objects = [    { name: "object1", value: [1, 2, 3] },
    { name: "object2", value: [1, 2] },
    { name: "object3", value: [1, 2, 3, 4, 5] },
    { name: "object4", value: [1] }
];
const threeElementsArray = objects.filter(object => object.value.length === 3);
console.log(threeElementsArray); // [{ name: "object1", value: [1, 2, 3] },{ name: "object3", value: [1, 2, 3, 4, 5] }]
