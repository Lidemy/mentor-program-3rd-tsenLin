function alphaSwap(str) {
  let newStr = '';

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] >= 'A' && str[i] <= 'Z') {
      newStr += String.fromCharCode(str.charCodeAt(i) + 32);
    } else if (str[i] >= 'a' && str[i] <= 'z') {
      newStr += String.fromCharCode(str.charCodeAt(i) - 32);
    } else {
      newStr += str[i];
    }
  }

  return newStr;
}

console.log(alphaSwap('nick'));

module.exports = alphaSwap;
