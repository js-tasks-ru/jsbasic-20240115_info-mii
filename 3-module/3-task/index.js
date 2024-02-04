function camelize(str) {
  let arr = str.split("");
  let res;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == '-') {
    arr.splice(i,2,arr[i + 1].toUpperCase());
    }
  }

return res = arr.join("")
}
