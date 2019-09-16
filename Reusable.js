'use strict';

// Identifiers

// 1.Declare the variable and write your name in it as a string literal.
let name = 'Marina Zabrodskaya';

// 2.Declare a constant and write in it the year of your birth as a literal of a number.
const MYBIRTHDATE = 1984;

// 3.Create a function that prints a greeting and has one argumen.
const greeting = name => console.log(`Hello ${name}!`);
greeting('Marina Zabrodskaya');
greeting(name);

// Loop

// 4.Print all the odd numbers from the range [15, 30], including the extreme numbers.
for (let i = 15; i <= 30; i += 2) {
    console.log(i);
  }
    
// 5. Implement the range function (start: number, end: number) that performs the previous task.
const RANGE = (start, end) => {
    for (let j = start; j <= end; j += 2) {
      console.log(j);
    }
  };
  RANGE(15, 30);
  
// Function

// 6.Implement the average function with the signature average (a: number, b: number):number calculating the arithmetic mean of your arguments.
const AVERAGE = (a, b) => (a + b) / 2;
console.log(`Average: ${AVERAGE(12, 4)}`);

// 7.Implement the square function with the signature square (x: number): number calculating the square of your argument.
const SQUARE = a => a**2;
console.log(`Square: ${SQUARE(5)}`);

// 8.Реализуйте функцию cube с сигнатурой cube(x: number): number вычисляющую куб своего аргумента.
const CUBE = a => a**3;
console.log(`Cube: ${CUBE(10)}`);

// 9.Call the square and cube functions in a loop, passing the results of their execution to the average function. Print average call results
for(let i = 1; i <= 3; i++) {
    const squared = SQUARE(i);
    const cubed = CUBE(i);
    const averageNumber = average(squared, cubed);
    console.log(`Average: ${averageNumber}`);
}

// Object

// 10.Create an object with one name field and assign it to a constant.
const PERSON = { name: 'Marina' };

// 11.Create an object with one name field and assign it to a variable.
let Person1 = { name: 'Peter' };

/*-Try changing the name field of both objects.
  -Try to assign a different object to both identifiers.
  -Explain the behavior of the code.*/
//PERSON
console.log(`Name before change(const): ${PERSON.name}`);
//change name 
PERSON.name = 'Alina';
console.log(`Name after change(const): ${PERSON.name}`);
//Person1
console.log(`Name before change(let): ${Person1.name}`);
//change name
Person1.name = 'Dima'
console.log(`Name after change(let): ${Person1.name}`);
//cange object
PERSON = { name: 'Tom' };
console.log(PERSON); // TypeError: Assignment to constant variable.
Person1 = { name: 'Duk' };
console.log(Person1;

/* Explanation:
const creates a constant (read-only access). This means that this value cannot be reassigned.*/

/* 12.Implement function createUser with signature createUser(name: string, city: string): object.
Example: createUser('Marcus Aurelius', 'Roma') will return object { name: 'Marcus Aurelius', city: 'Roma' }*/
const createUser = (name, city) => ({
    name, city
});

console.log(createUser('Marcus Aurelius', 'Roma'));

// Array

// 13.Declare an array of objects with two fields: name and phone to store the phone book
const users= [
    { name: 'August Petrov', phone: '+38044555888' },
    { name: 'Poul Smith', phone: '+38044125666' },
];

// 14.Implement the findPhoneByName function with the signature findPhoneByName (name: string): string
const findPhoneByName = (name) => {
    for (let i = 0; i < users.length; i++) {
      if (users[i].name === name) {
        return users[i].phone;
      }
    }
  };
console.log(findPhoneByName('Poul Smith'));

// Hash

// 15.Define a hash with keys with the values ​​of the name field (from the previous example) and values ​​equal to the phone field
const hashUsers = {
    'August Petrov': '+38044555888',
    'Poul Smith': '+38044125666',
};

// 16.Implement the findPhoneByName function with the signature findPhoneByName (name: string): string
const findPhoneByNameFromHash = name => {
    for(const key in hashUsers) {
        if(key === name) {
            return hashUsers[key];
        }
    }
}

console.log(findPhoneByNameFromHash('August Petrov'));