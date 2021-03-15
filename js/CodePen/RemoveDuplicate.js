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
