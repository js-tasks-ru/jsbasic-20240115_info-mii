function filterRange(arr, a, b) {
  return arr.filter(el => el >= a && el <= b)
}


// ИЗНАЧАЛЬНО РЕШЕНИЕ БЫЛО ТАКОЕ, НАВЕРНОЕ МОЖНО ТАК ТОЖЕ, НО КОД БОЛЬШЕ
/*
let arr = [5, 3, 8, 1];
let result = [];
function filterRange(arr, a, b) {
  for(let i = 0; i < arr.length; i++){
      if (arr[i] >= a && arr[i] <= b){
    result.push(arr[i]);
    }
  } 
                       return result;
}

let filtered = filterRange(arr, 1, 4);

console.log( filtered ); // [3,1] (совпадающие значения)
console.log( arr ); // [5,3,8,1] (без изменений)*/