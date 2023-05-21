const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2; 
};

const sum = function(array) {

  return array.reduce((totalNum, currentNum) => totalNum + currentNum, 0);
};

const multiply = function(array) {
 return array.reduce((totalNum, currentNum) => totalNum * currentNum);
};

const power = function(num, power) {
	return Math.pow(num,power);
};

const factorial = function(n) {
  if (n === 0) return 1;
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
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
