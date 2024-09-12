const convertToCelsius = (temp) => {
  let result = (temp - 32) * (5 / 9);
  let roundedDown = Math.round(result * 10) / 10;
  return roundedDown;
};

const convertToFahrenheit = (temp) => {
  let result = temp * (9 / 5) + 32;
  let roundedDown = Math.round(result * 10) / 10;
  return roundedDown;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
