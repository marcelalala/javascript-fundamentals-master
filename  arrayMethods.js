//! Given the array below, write a function add2 that will receive the array as an argument and will return a new array with all items of the original array added by 2.

const arrEx1 = [2, 4, 6, 7, 9, 12];

let add2 = arrEx1.map(element => element * 2);
console.log(add2);

// ######################################### //

//! Given an array of numbers, write a function checkSum that returns the string 'even' if the sum of all values are even, otherwise return 'odd';

const arrEx2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const checkSum = arrEx2.reduce((accumulator, currentValue) => {
  let total = accumulator + currentValue;
  if (total % 2 === 0) {
    return "even";
  } else {
    return "Odd";
  }
});

console.log(checkSum);
// --- perguntar pros TIs pq tá dando impar se o resultado é par ---


// ######################################### //

//! Given an array of numbers, write a function evenNumbers that returns a new array only with the even numbers of the original array.

const arrEx3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = arrEx3.filter(number => number % 2 === 0);

console.log(evenNumbers);

// function evenNumbers(arrEx3) {
//   let newArray = [];
//   for (let i = 1; i < arrEx3.length; i += 1) {
//     if (arrEx3[i] % 2 === 0) {
//       newArray.push(arrEx3[i]);
//     }
//   }
//   return newArray;
// }
// evenNumbers(arrEx3);


// ######################################### //

//! Given an array of letters, write a function sortLetters that returns a new array of letters in alphabetical order.

const arrEx4 = ['a', 'c', 'g', 'r', 'w', 'e', 's', 'l', 'z', 'q', 'b', 'd'];

const sortLetters = array => {
  let newArray = arrEx4.slice();
  return newArray.sort();
};

sortLetters(arrEx4);

// ######################################### //

//! Make a function that takes a number and returns that number multiplied by 5.

let MultiplyBy5 = num => num * 5;

MultiplyBy5(5);

// ######################################### //

//! Using any array method and the function built in the previous question, make a loop that print the elements of an array multiplied by 5.

// code here

// ######################################### //

//! Make a function that takes a letter and returns it uppercase

const LetterUpperCase = array => array.toUpperCase();

LetterUpperCase("l");

// ######################################### //

//! Using any array method and the function built in the previous question, make a loop that print the elements upper case of an array.

// code here

// ######################################### //

//! Create a function that takes a number and returns true if the number is odd and false if the number is even

let trueOrFalse = array => {
  if (array % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

trueOrFalse(5);

// ######################################### //

//! Using any array method and the function built in the previous question, make a loop that return only the odd numbers.

// code here

// ######################################### //

//! Using any array method, make a loop that return the result of multiplying all the elements.

const arrEx2 = [1, 2, 4, 9, 13, 11, 6];

const multiplyNumbers = arrEx2.reduce((acc, cv) => acc + cv);

console.log(multiplyNumbers);

// ######################################### //

