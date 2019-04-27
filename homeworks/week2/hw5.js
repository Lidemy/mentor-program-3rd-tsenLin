function join(arr, concatStr) {
  var joinStr = '';

  if(arr.length > 0) {
    joinStr = arr[0];
  }

  for(var i=1; i < arr.length; i++) {
    joinStr += concatStr + arr[i] 
  }

  return joinStr;
}

function repeat(str, times) {
  var repeatStr = '';

  for(var i=0; i < times; i++) {
    repeatStr += str
  }

  return repeatStr;
}

join([1, 2, 3], '') //正確回傳值：123
join(["a", "b", "c"], "!") //正確回傳值：a!b!c
join(["a", 1, "b", 2, "c", 3], ',') //正確回傳值：a,1,b,2,c,3

repeat('a', 5) //正確回傳值：aaaaa
repeat('yoyo', 2) //正確回傳值：yoyoyoyo
