function stars(n) {
  const starsArray = [];
  for (let i = 0; i < n; i += 1) {
    starsArray[i] = '*';
    for (let j = 0; j < i; j += 1) {
      starsArray[i] += '*';
    }
  }
  return starsArray;
}

module.exports = stars;
