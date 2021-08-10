let arr = [1, 3, 3, 3, 5, 5];
let newArr = [];
function removeDupli(arr) {
  let point1 = 0;
  for (let point2 = 0; point2 <= arr.lenght; point2++) {
    if (arr[point1] !== arr[point2]) {
      point1++;
      point1 == point2;
    }
  }
  return point1++;
}
removeDupli(arr);


// With java script data types.

let arr = [1, 3, 3, 3, 5, 5];
let dupli = [...new Set(arr)];  // using spread operator to convert set to array.

console.log(dupli);


// Brute force algorithm

let arr = [1, 3, 3, 3, 5, 5];
let dupli = [];
for(let i = 0; i < arr.length; i++){
  if(dupli.indexOf(arr[i]) === -1){    // we check here  arr[i] in to dupli   
    dupli.push(arr[i]);
  }
}
console.log(dupli);