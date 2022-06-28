console.log("Solutions Central");

//This is the solution to exercise 2.1
// for (let result = "#"; result.length <= 7; result = result + "#") {
//   console.log(result);
// }

//This is the solution to exercise 2.2
// for (let number = 0; number <= 10; number++) {
//   let result = "";
//   if (number % 3 == 0) result += "fizz";
//   if (number % 5 == 0) result += "buzz";
//   console.log(result || number);
// }

//This is the solution for exercise 2.3
// let size = 10;
// let board = "";

// for (let i = 0; i < size; i++) {
//   for (let j = 0; j < size; j++) {
//     if ((i + j) % 2 == 0) {
//       board += " ";
//     } else {
//       board += "#";
//     }
//   }
//   board += "\n";
// }
// console.log(board);

//Solution for exercise 3.1
// function min(x, y) {
//   return Math.min(x, y);
// }
// function min(a, b) {
//   if (a < b) return a;
//   else return b;
// }

//Solution for exercise 3.1 using arrow function notation
// let min = (x, y) => Math.min(x, y);
// console.log(min(0, 10));
// console.log(min(0, -10));

//Exercise 3.2 which fulfills the conditions without recursion
// function isEven(number) {
//   if (number % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

//3.2 with recursion and each case check
// function isEven(n) {
//   if (n == 0) return true;
//   else if (n == 1) return false;
//   else if (n < 0) return isEven(-n);
//   else return isEven(n - 2);
// }

// console.log(isEven(50));
// console.log(isEven(75));
// console.log(isEven(-1));

// //Exercise 3.3
// function countBs(strings) {
//   return countChar(strings, "B");
// }

// function countChar(strings, letter) {
//   let counter = 0;
//   for (let i = 0; i < strings.length; i++) {
//     if (strings[i] == letter) {
//       counter += 1;
//     }
//   }
//   return counter;
// }

// console.log(countBs("BBC"));
// console.log(countChar("kakkerlak", "k"));

//Exercise 4.1

// function range(start, end, range = 1) {
//   let array = [];
//   let count = start;
//   for (let i = start; i <= end; i++) {
//     if (count <= end) {
//       array.push(count);
//       count = count + range;
//     }
//   }
//   return array;
// }

// //solution from book

// function range(start, end, step = start < end ? 1 : -1) {
//   let array = [];

//   if (step > 0) {
//     for (let i = start; i <= end; i += step) array.push(i);
//   } else {
//     for (let i = start; i >= end; i += step) array.push(i);
//   }
//   return array;
// }

// function sum(arrayValue) {
//   return arrayValue.reduce((a, b) => a + b, 0);
// }

// console.log(range(1, 10));
// console.log(sum(range(1, 10)));
// console.log(range(5, 2, -1));

//Exercise 4.2
function reverseArray(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    let last = array.unshift();
    newArray.push(last);
  }
  return newArray;
}
console.log(reverseArray(["A", "B", "C"]));
