const add = function(a,b) {
	return Number(a)+Number(b);
};

const subtract = function(a,b) {
  return a-b;

};

const sum = function(array) {
  if(array.length === 0) {
    return 0;
  } else if (array.length === 1) {
    return array[0]
  } else {
    let sumAll = 0;

    for (let i = 0; i < array.length; i++) {
      sumAll += array[i];
    }

    return sumAll;
  }
};


const multiply = function(array) {
  let multi = 1;

    for (let i = 0; i < array.length; i++) {
      multi *= array[i];
    }

    return multi;
};

const power = function(a, b) {
  let pow = 1;

  for (let i = 1; i<=b; i++) {
    pow *= a
  }
	
  return pow;
};

const factorial = function(a) {
  let fac = 1; 

  if (a === 0) {
    return 1;
  } else {
    for (let i = 1; i<=a; i++) {
      fac *= i
    }

    return fac;
  }

	
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
