function add(a, b) {
  let x;
  let y;
  if (a.length > b.length) {
    x = a;
    y = b;
  } else {
    x = b;
    y = a;
  }

  let sum = [0];
  sum = sum.concat(x.split('').map(n => parseInt(n, 10)));

  for (let i = sum.length - 1, j = y.length - 1; j >= 0; i -= 1, j -= 1) {
    const temp = parseInt(sum[i], 10) + parseInt(y[j], 10);

    sum[i] = temp % 10;
    sum[i - 1] = parseInt(sum[i - 1], 10) + parseInt(temp / 10, 10);
  }

  if (sum[0] === 0) {
    sum.shift();
  }

  return sum.join('');
}

module.exports = add;
