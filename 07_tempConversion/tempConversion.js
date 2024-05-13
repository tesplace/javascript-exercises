const convertToCelsius = function(fah) {
  return parseFloat(((fah-32)/1.8).toFixed(1));
};

const convertToFahrenheit = function(cel) {
  return parseFloat((cel*1.8 + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
