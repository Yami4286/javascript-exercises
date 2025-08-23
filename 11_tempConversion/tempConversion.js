const convertToCelsius = function(farhen) { 
  let temop = (farhen - 32 )*(5/9);
  return parseFloat(temop.toFixed(1));
};

const convertToFahrenheit = function(Celcius) {
  let temp = (Celcius *(9/5)) +32 ;
  return parseFloat(temp.toFixed(1));
};
convertToCelsius(32);
convertToCelsius(100);
convertToCelsius(-100);
convertToFahrenheit(0);
convertToFahrenheit(73.2);
convertToFahrenheit(-10);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
