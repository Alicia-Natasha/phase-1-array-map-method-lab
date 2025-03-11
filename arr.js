const arr = [0,10,20,30]
const fn = function greaterThan10(n) {
    return n > 10;
}

function filter(arr, fn) {
  let filteredArr = [];
  
  for (let i = 0; i < arr.length; i++) {
      if (fn(arr[i], i)) {
          filteredArr.push(arr[i]);
      }
  }
  
  return filteredArr;
}

console.log(filter(arr, fn)); 