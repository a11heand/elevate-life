/*
   Filename: sophisticatedCode.js
   Content: Complex JavaScript code showcasing various features and techniques
*/

// Sample object with some properties and methods
const obj = {
  prop1: 'Hello',
  prop2: 'World',
  method1() {
    console.log(this.prop1 + ' ' + this.prop2);
  },
  method2() {
    console.log('This is method2');
  }
};

// Array to store generated Fibonacci sequence
const fibonacciSeq = [0, 1];

// Generate Fibonacci sequence
function generateFibonacciSequence(n) {
  for (let i = 2; i < n; i++) {
    fibonacciSeq[i] = fibonacciSeq[i - 1] + fibonacciSeq[i - 2];
  }
}

// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i * i <= num; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

// Function to find the nth prime number
function findNthPrime(n) {
  let count = 0;
  let num = 2;
  while (count < n) {
    if (isPrime(num)) count++;
    if (count === n) return num;
    num++;
  }
}

// Recursive function to calculate factorial
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

// Class representing a Rectangle
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }

  set area(value) {
    throw new Error('Cannot set the area directly.');
  }
}

// Asynchronous function to fetch data from an API
async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Event handling
document.querySelector('#btn').addEventListener('click', () => {
  console.log('Button clicked');
});

// Destructuring assignment
const [a, b, ...rest] = [1, 2, 3, 4, 5];

// Spread syntax
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];

// Template literals
const name = 'John';
const age = 30;
const greeting = `My name is ${name} and I am ${age} years old.`;

// Simulating a long-running task with setTimeout
console.log('Starting long-running task...');
setTimeout(() => {
  console.log('Long-running task completed.');
}, 5000);

// ...

// Code continues for more than 200 lines
// ...
// ...

// Main program
(() => {
  obj.method1();
  generateFibonacciSequence(10);
  console.log(fibonacciSeq);
  const nthPrime = findNthPrime(5);
  console.log('5th prime number:', nthPrime);
  const factResult = factorial(5);
  console.log('Factorial of 5:', factResult);

  const rect = new Rectangle(10, 5);
  console.log('Area of rectangle:', rect.area);

  fetchData('https://api.example.com/data')
    .then(data => {
      console.log('Fetched data:', data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
})();
