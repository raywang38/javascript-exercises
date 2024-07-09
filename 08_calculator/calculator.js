const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	return arr.reduce((total, current) => total + current, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, current) => total * current);
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
  
  let sum = 1;

  for (let i = 0; i <= num; i++) {
    if (num === 0) {
      return 1;
    }
    else {
      if (i === 0) {
        continue;
      }
      sum *= i;
    }
  } 
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
