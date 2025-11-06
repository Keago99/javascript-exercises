const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(numArray) {
  const arrayTotal = numArray.reduce((accumulator, current) => accumulator + current, 0);
  return arrayTotal;
};

const multiply = function(numArray) {
  const multiArray = numArray.reduce((accumulator, current) => accumulator * current);
  return multiArray;
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(n) {
    if (n < 0) return undefined;
    if (n === 0 || n === 1) return 1;
    
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
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
