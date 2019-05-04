function add(a, b) {
  const digit = ((a.length > b.length) ? a.length : b.length) + 1;
  const x = ('0'.repeat(digit - a.length) + a).split('').reverse();
  const y = ('0'.repeat(digit - b.length) + b).split('').reverse();

  const sum = [];
  let carry = 0;
  for (let i = 0; i < x.length; i += 1) {
    const temp = carry + parseInt(x[i], 10) + parseInt(y[i], 10);
    sum.push(temp % 10);
    carry = parseInt(temp / 10, 10);
  }

  if (sum[digit - 1] === 0) {
    sum.pop();
  }

  return sum.reverse().join('');
}

module.exports = add;
