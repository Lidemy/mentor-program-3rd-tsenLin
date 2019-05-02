function isPalindromes(str) {
  const left = Math.floor(str.length / 2) - 1;
  const right = Math.ceil(str.length / 2);
  for (let i = left, j = right; i >= 0; i -= 1, j += 1) {
    if (str[i] !== str[j]) {
      return false;
    }
  }

  return true;
}

module.exports = isPalindromes;
