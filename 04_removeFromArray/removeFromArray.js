function removeFromArray(array, ...targets) {
  result = array.filter((value) => !targets.includes(value));
  return result;
}

// Do not edit below this line
module.exports = removeFromArray;
