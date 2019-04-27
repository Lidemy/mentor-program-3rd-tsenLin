function printFactor(n) {
  var factor = [];

  for(var i=1; i <= n; i++) {
    if(n%i == 0) {
      factor.push(i);
      console.log(i);
    }
  }

  return factor;
}

printFactor(10);
