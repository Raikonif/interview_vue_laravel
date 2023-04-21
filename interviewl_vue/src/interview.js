const textArray = ["EMI", "LIANO"];

const updatedArray = (arr) => {
  new_array = [];
  for (let num of arr) {
    if (num.toString().length === 1 && num.toString() === "5") {
      new_array.push(textArray[1]);
    } else if (num.toString().length === 1 && num.toString() === "7") {
      new_array.push(textArray[0]);
    } else if (num.toString().length > 1) {
      let new_num = "";
      for (let i of num.toString()) {
        if (i === "5") {
          new_num += textArray[1];
        } else if (i === "7") {
          new_num += textArray[0];
        } else {
          new_num += i;
        }
      }
      new_array.push(new_num);
    } else {
      new_array.push(num);
    }
  }
  return new_array;
};

const array1 = [5, 8, 7, 9];
console.log(updatedArray(array1));
const array2 = [2, 7, 9, 6, 75];
console.log(updatedArray(array2));
const array3 = [2, 7, 57, 6, 5];
console.log(updatedArray(array3));
const array4 = [2, 5, 7, 75, 4, 757];
console.log(updatedArray(array4));
