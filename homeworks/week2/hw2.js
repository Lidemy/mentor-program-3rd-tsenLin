function capitalize(str) {
  code = str.charCodeAt(0);
  if (code >= 97 && code <= 122) {
    str = String.fromCharCode(code - 32) + str.substr(1, str.length-1)
  }
  return str;
}

console.log(capitalize(',hello'));
console.log(capitalize('hello'));
console.log(capitalize('Aello'));
