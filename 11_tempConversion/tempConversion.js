const convertToCelsius = function(temp) {
  let converted = (temp - 32) * 5 / 9;
  let roundedConverted = Math.round(converted * 10) / 10;
  return roundedConverted;
};

const convertToFahrenheit = function(temp1) {
  let converted1 = (temp1 * 9/5) + 32;
  let roundedConverted1 = Math.round(converted1 * 10) / 10;
  return roundedConverted1;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
