function reverseString(words) {
  let result = "";
  for (let i = words.length - 1; i > -1; i--) {
    result += words[i];
  }
  return result;
}

// Do not edit below this line
module.exports = reverseString;
