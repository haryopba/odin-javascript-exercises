const add = function(n1, n2) {
  return n1 + n2;
};

const subtract = function(n1, n2) {
	return n1 - n2;
};

const sum = function(listOfNum) {
  return listOfNum.reduce((prev, curr) => prev + curr, 0);
};

const multiply = function(listOfNum) {
  return listOfNum.reduce((prev, curr) => prev * curr, 1);
};

const power = function(n1, n2) {
	return n1 ** n2;
};

const factorial = function(n) {
  let total = 1;
  for(let i = n; i > 0; i--){
    total = total * i;
  }
  return total;
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
