//*********************************** EXAMPLE ***********************************//
//! adds 2 to inputted number
// ex: addTwo(5); -> 7
// ex: addTwo(6); -> 8
//*** ES5 ***//
function addTwo(number) {
    const result = number + 2;
    return result;
}
// OR
function addTwo(number) {
    return number + 2;
    
}
//*** ES6 ***//
const addTwo = number => {
    const result = number + 2;
    return result;
}
// OR
const addTwo = number => number + 2;

//*********************************** PRACTICE ***********************************//

//! adds the two inputted numbers together
// ex: add(5, 10); -> 15
//*** ES5 ***//
function add(num1, num2) {
    const result = num1 + num2;
    return result 
}
//*** ES6 ***//
const add = (num1,num2) => {
    return num1 + num2
}

//--------------------------------------------------------------------------------//
//! adds all three inputted numbers together
// ex: addd(1,2,3); -> 6
// ex: addd(2,4,2); -> 8
//*** ES5 ***//
function addd(value1, value2, value3) {
const result = value1 + value2  + value3;
return result
}
//*** ES6 ***//
const addd = (value1, value2, value3) => {
    return value1 + value2  + value3
}

//--------------------------------------------------------------------------------//
//! subtracts the second inputted number from the first inputted number
// ex: subtract(5, 10); -> -5
//*** ES5 ***//
function subtract(n1, n2) {
    const result = n1 - n2;
    return result
}
//*** ES6 ***//
const subtract = (n1,n2) =>  {
    return n1 - n2
}

//--------------------------------------------------------------------------------//
//! multiplies the inputted number by 2
// ex: multiplyByTwo(5); -> 10
// ex: multiplyByTwo(6); -> 12
//*** ES5 ***//
function multiplyByTwo(numero) {
    const result = numero * 2;
    return result
}
//*** ES6 ***//
const multiplyByTwo = numero => {
    return numero * 2
}
//--------------------------------------------------------------------------------//
//*** ES5 ***//
//! multplies the two inputted numbers together
// ex: multiply(1,2); -> 2
// ex: multiply(2,2); -> 4
function multiply(val1, val2) {
    const result = val1 * val2;
    return result
}
//*** ES6 ***//
// write your code here

const multiply = (val1, val2) => val1 * val2

//*** ES5 ***//
//! multiplies all three inputted numbers together
// ex: multiplyy(1,2,3); -> 6
// ex: multiplyy(2,2,3); -> 12
function multiplyy(a, b, c) {
    const result = a * b * c
    return result
}
//*** ES6 ***//
const multiplyy = (a, b, c) => {
    return a * b * c
}
//--------------------------------------------------------------------------------//
//*** ES5 ***//
//! returns the square of the inputted number
// ex: square(5); -> 25
function square(value) {
    const result = value ** 2
    return result
}
//*** ES6 ***//
const square = value => value ** 2;
//--------------------------------------------------------------------------------//
//*** ES5 ***//
//! determines if the number is odd
//! outputs true if the number is odd
//! outputs false if the number is even
// ex: isOdd(4); -> true
// ex: isOdd(5); -> false
function isOdd(num) {
    if (num % 2 !== 0) {
        return true;
      } else {
        return false;
      }
    }
//*** ES6 ***//
const isOdd = num => {
    if (num % 2 !== 0) {
      return true;
    } else {
      return false;
    }
  };
  
//--------------------------------------------------------------------------------//
//*** ES5 ***//
//! determines if the number is negative
//! outputs true if the number is negative
//! outputs false if the number is zero or positive
// ex: isNegative(-1); -> true
// ex: isNegative(1); -> false
// ex: isNegative(0); -> false
function isNegative(num) {
    if (num < 0) {
        return true;
      } else if (num > 0) {
        return false;
      } else {
        return false;
      }
    }
//*** ES6 ***//
const isNegative = num => {
    if (num < 0) {
      return true;
    } else if (num > 0) {
      return false;
    } else {
      return false;
    }
  }

//--------------------------------------------------------------------------------//
//*** ES5 ***//
//! returns the absolute value of the inputted number
// ex: positive(-1); -> 1
// ex: positive(1); -> 1
function positive(num) {
    return Math.abs(num)
}
//*** ES6 ***//
const positive = num => Math.abs(num);
//--------------------------------------------------------------------------------//
//*** ES5 ***//
//! Returns boolean of whether argument is classified as a Number object
// isNumber(5); → true
// isNumber('hi'); → false
function isNumber(value) {
  if (typeof value === "string") {
    return false;
  } else {
    return true;
  }
}
//*** ES6 ***//
const isNumber = value => {
    if (typeof value === "string") {
      return false;
    } else {
      return true;
    }
  }
//--------------------------------------------------------------------------------//
//*** ES5 ***//
//! Returns boolean of whether argument is classified as an Array object
// isArray(5); → false
// isArray([1,2,3]); → true
function isArray(value) {
    if (typeof value === "object") {
        return true;
      } else {
        return false;
      }
    }

//*** ES6 ***//
const isArray = value => {
    if (typeof value === "object") {
        return true;
      } else {
        return false;
      }
    }

//--------------------------------------------------------------------------------//
//*** ES5 ***//
//! Returns boolean of whether argument is classified as an Object
// isObject(5); → false
// isObject([1,2,3]); → false
// --- não entendi o que é para fazer... é pra retornar falso se for ou não objeto?? ---
function isObject(value) {
}
//*** ES6 ***//


//--------------------------------------------------------------------------------//
//*** ES5 ***//
//! return boolean of whether argument is classified as null
// isNull(null); -> true
// isNull(5); -> false
function isNull(value) {
    if (typeof value === null) {
        return true;
      } else {
        return false;
      }
    }
//*** ES6 ***//
const isNull = (value) => {
    if (typeof value === null) {
        return true;
      } else {
        return false;
      }
    }
//--------------------------------------------------------------------------------//
//*** ES5 ***//
//! this function accepts an array of numbers
//! and returns an array of only the odd numbers
// ex: returnOdds([1,2,3,4,5,6,7]); -> [1,3,5,7]
function returnOdds(array) {
  return array.filter(function(element) {
    return element % 2 === 1;
  });
}

//*** ES6 ***//
const returnOdds = array => array.filter((element) => element % 2 === 1);


//--------------------------------------------------------------------------------//
//*** ES5 ***//

//! this function accepts an array of numbers
//! and returns an array of only the even numbers
// ex: returnEvent([1,2,3,4,5,6,7]); -> [2,4,6]
function returnEvens(array) {
    return array.filter(function(element) {
      return element % 2 === 0;
    });
  }
  
//*** ES6 ***//
const returnEvens = array => array.filter(element => element % 2 === 0)

//--------------------------------------------------------------------------------//
//*** ES5 ***//
//! returns only the max element from the inputted array of numbers
// ex: findMax([1,25,6,3]); -> 25
function findMax(array) {
    array.reduce(function(a, b) {
      return Math.max(a, b);
    });
  }
  
//*** ES6 ***//
const max = arr => arr.reduce((a, b) => Math.max(a, b));

//--------------------------------------------------------------------------------//
//*** ES5 ***//
//! remove leading and trailing whitespace or specified characters from string
// trim(' hello '); -> 'hello'
function trim(string) {
  return string.replace(/^\s+|\s+$/g, "");
}
//*** ES6 ***//
const trim = string => string.replace(/^\s+|\s+$/g, "");