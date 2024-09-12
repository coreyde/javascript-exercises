function sumAll(value1, value2) {
  result = 0;
  if (
    !Number.isInteger(value1) ||
    value1 < 0 ||
    !Number.isInteger(value2) ||
    value2 < 0
  ) {
    return "ERROR";
  } else if (value1 > value2) {
    for (let i = value2; i < value1 + 1; i++) {
      result += i;
    }
  } else {
    for (let i = value1; i < value2 + 1; i++) {
      result += i;
    }
  }
  return result;
}

// Do not edit below this line
module.exports = sumAll;
