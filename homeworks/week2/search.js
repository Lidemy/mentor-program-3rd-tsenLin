function search(arr, n) {
  var left = 0
  var right = arr.length - 1

  while(left <= right) {
    var middle = Math.ceil( (right + left) / 2 )

    if( arr[middle] == n ) {
      return middle
    }

    if( arr[middle] > n ) {
      right = middle -1
    } else {
      left = middle + 1
    }
  }

  return -1
}
function search2(arr, n) {
  for(var i=0; i<arr.length; i++) {
    if (arr[i] === n) return i
  }
  return -1
}

 
  console.log(search([1, 3, 10, 14, 39, 59], 39));  
  console.log(search([1, 3, 10, 14, 39], 299));