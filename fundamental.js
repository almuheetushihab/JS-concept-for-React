//1. How to declear a variable using `let` and const

const fatherName = "John"; // This is a constant variable
let season = "rainy"; // This is a variable that can be reassigned


// 2. 6 basic conditional statements : >, <, >=, <=, ===, !==
// multiple conditions can be combined using logical operators like && (AND) and || (OR)

if(fatherName === "John" && season === "rainy") {
    console.log("It's rainy season and the father's name is John.");
} else if(fatherName === "john"){
    console.log("The father's name is John but the season is not rainy.");
}else{

}

if(fatherName === "John" || season === "rainy") {
    console.log("Either it's rainy season or the father's name is John.");
}

// 3. araray declare,
// index,
//length, push,

const fruits = ["apple", "banana", "orange"]; // Array declaration
console.log(fruits[0]); // Accessing the first element (index 0)

console.log(fruits.length); // Getting the length of the array
fruits.push("grape"); // Adding a new element to the end of the array
console.log(fruits); // Displaying the updated array

const numbers = [1, 2, 3, 4, 5];
numbers[0] = 10; // Changing the first element


//4. for loop
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]); // Printing each number in the array
}
// 5. while loop
let i = 0;
while (i < numbers.length) {
    console.log(numbers[i]); // Printing each number in the array
    i++;
}
// 6. do while loop
let j = 0;
do {
    console.log(numbers[j]); // Printing each number in the array
    j++;
} while (j < numbers.length);
// 7. function declaration
function greet(name) {
    return `Hello, ${name}!`; // Returning a greeting message
}
// Function call
console.log(greet("Alice")); // Output: Hello, Alice!
// 8. function expression
const add = function(a, b) {
    return a + b; // Returning the sum of two numbers
}
// Function call
console.log(add(5, 10)); // Output: 15  
// 9. arrow function
const multiply = (a, b) => a * b; // Arrow function for multiplication
// Function call
console.log(multiply(5, 10)); // Output: 50
// 10. object declaration
const person = {
    name: "Alice", // Property: name
    age: 30, // Property: age
    greet: function() { // Method: greet
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
};
// Accessing object properties
console.log(person.name); // Output: Alice
console.log(person.age); // Output: 30
// Calling the greet method
console.log(person.greet()); // Output: Hello, my name is Alice and I am 30 years old.
// 11. class declaration
class Animal {
    constructor(name) { // Constructor to initialize the name property
        this.name = name; // Assigning the name property
    }
    speak() { // Method to make the animal speak
        return `${this.name} makes a noise.`;
    }
}
// Creating an instance of the Animal class
const dog = new Animal("Dog"); // Creating a new Animal object with name "Dog"
// Calling the speak method
console.log(dog.speak()); // Output: Dog makes a noise.
// 12. inheritance
class Dog extends Animal { // Dog class inherits from Animal class
    speak() { // Overriding the speak method
        return `${this.name} barks.`; // Custom behavior for Dog
    }
}
// Creating an instance of the Dog class
const myDog = new Dog("Buddy"); // Creating a new Dog object with name "Buddy
// Calling the speak method
console.log(myDog.speak()); // Output: Buddy barks.
// 13. try catch
try {
    // Code that may throw an error
    let result = riskyFunction(); // Assuming riskyFunction is defined elsewhere
}catch (error) {
    console.error("An error occurred:", error.message); // Handling the error
}
// 14. async await
async function fetchData() {
    try {
        const response = await fetch("https://api.example.com/data"); // Fetching data from an API
        const data = await response.json(); // Parsing the JSON response
        console.log(data); // Displaying the fetched data
    } catch (error) {
        console.error("Error fetching data:", error.message); // Handling any errors that occur during the fetch
    }
}

// Function call to fetch data
fetchData(); // Initiating the data fetch process
// 15. promise
const myPromise = new Promise((resolve, reject) => {
    // Simulating an asynchronous operation
    setTimeout(() => {
        const success = true; // Change to false to simulate failure
        if (success) {
            resolve("Operation was successful!"); // Resolving the promise
        } else {
            reject("Operation failed!"); // Rejecting the promise
        }
    }, 1000);
});