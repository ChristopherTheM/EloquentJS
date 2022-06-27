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
let size = 10;
let board = "";

for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    if ((i + j) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}
console.log(board);
