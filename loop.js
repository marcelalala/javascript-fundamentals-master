//! READ: http://learn.ironhack.com/#/learning_unit/8206

//***************** EXAMPLE ************ //
// for(initiation; condition to keep loop; incrementer) {
//   statement
// }


// ************* PRATICE ************** //
//! Print numbers 0 to 100
for (let i = 1; i <= 100; i += 1) {
    console.log([i]);
  }
// ######################################### //

//! Print only even numbers from 0 to 100

for (let i = 1; i <= 100; i += 1) {
    if (i % 2 === 0) {
        console.log([i]);
    }
  }
// ######################################### //

//! Print only odd numbers from 0 to 100

for (let i = 1; i <= 100; i += 1) {
    if (i % 2 !== 0) {
        console.log([i]);
    }
  }

// ######################################### //

//! Print numbers 80 to 20

for (let i = 80; i > 19; i -= 1) {
    console.log([i]);
  }

// ######################################### //


//! Write an array called arrEx2 with length 3.

let arrEx2 = [1, 2, 3];
// ######################################### //

//! Write a loop using for structure that prints all positive numbers until 48 (including 48).
for (let i = 1; i <= 48; i += 1) {
    if (i % 2 === 0) {
        console.log([i]);
    }
}

// ######################################### //

//! Write a loop using for structure that prints all negative numbers until -30 (excluding).
for (let i = 0; i <= 30; i += 1) {
    console.log([i] * -1);
  }
  
    // ######################################### //

//! Write a loop using for structure that prints all numbers from 102 (including) to 32 (including) in steps of 2.

for (let i = 102; i > 32; i -= 2) {
    console.log([i]);
  }  

// ######################################### //

// Use FOR Loop to print the content of array "pets"

const pets = ['dog', 'cat', 'bird', 'salamander', 'human', 'ape', 'alien', 'dinossaur'];

for (let i = 1; i < pets.length; i += 1) {
    console.log(pets[i]);
  }
  
//! Use FOR EACH to print the content of array "pets"
const copyPets = [];

pets.forEach(item => copyPets.push(item));
console.log(copyPets);

// ######################################### //

// Use FOR to count and print how many times the letter x appears in the array
const array = [1, 'x', 3, 8, 'x', 5, 7, 3, 'x', 2, 6, 'x', 10];

function countX(array) {
    var count = 0;
    for (var i = 0; i < array.length; ++i) {
      if (array[i] == "x") count++;
    }
    return count;
  }
  countX(array);    


//! Use FOR EACH to count and print how many times the letter x appears in the array
const printX = (array, value) => {
    var count = 0;
    array.forEach(item => item === value && count++);
    return count;
  };
  
  console.log(printX(array, "x")); 

// ---- não soube fazer ----  

// ######################################### //

const numbers = [1, 5, 6, 8, 12, 25, 65, 78];
//! Use FOR to calculate and print the sum of all numbers in the array
var sum = 0;
for (let i = 0; i < numbers.length; i += 1) {
  sum += numbers[i];
}

//! Use FOR EACH to calculate and print the sum of all numbers in the array
let sum = 0;
numbers.forEach(item => (sum += item));

console.log(sum);

// ######################################### //

const sentence = 'Hack your life';
//! Use FOR to print each letter of the sentence on a different line.
for (let i = 1; i < sentence.length; i += 1) {
    console.log(sentence.charAt(i));
  }
  

//! Use FOR EACH to print each letter of the sentence on a different line.
[...sentence].forEach(c => console.log(c));
// --- não soube fazer ----