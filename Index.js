console.log("Solutions Central");

// //Exercise 2.1
// for (let result = "#"; result.length <= 7; result = result + "#") {
//   console.log(result);
// }

// //Exercise 2.2
// for (let number = 0; number <= 10; number++) {
//   let result = "";
//   if (number % 3 == 0) result += "fizz";
//   if (number % 5 == 0) result += "buzz";
//   console.log(result || number);
// }

// //Exercise 2.3
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

// //Exercise 3.1
// function min(x, y) {
//   return Math.min(x, y);
// }
// function min(a, b) {
//   if (a < b) return a;
//   else return b;
// }

// //Solution for exercise 3.1 using arrow function notation
// let min = (x, y) => Math.min(x, y);
// console.log(min(0, 10));
// console.log(min(0, -10));

// //Exercise 3.2 which fulfills the conditions without recursion
// function isEven(number) {
//   if (number % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// //Exercise 3.2 with recursion and each case check
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

// //Exercise 4.1

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

// //Exercise 4.2
// function reverseArray(array) {
//   let newArray = [];
//   for (let i = array.length - 1; i >= 0; i--) {
//     newArray.push(array[i]);
//   }
//   return newArray;
// }
// console.log(reverseArray(["A", "B", "C", "D"]));

// //Exercise 4.3
// function reverseArrayInPlace(array) {
//   for (let i = 0; i < Math.floor(array.length / 2); i++) {
//     let old = array[i];
//     array[i] = array[array.length - 1 - i];
//     array[array.length - 1 - i] = old;
//   }
//   return array;
// }

// let arrayValue = [1, 2, 3, 4, 5];
// reverseArrayInPlace(arrayValue);
// console.log(arrayValue);

//Exercise 4.4
// let list = {
//   value: 1,
//   rest: {
//     value: 2,
//     rest: {
//       value: 3,
//       rest: null,
//     },
//   },
// };

// function arrayToList(array) {
//   let list = null;
//   for (let i = array.length - 1; i >= 0; i--) {
//     list = { value: array[i], rest: list };
//   }
//   return list;
// }

// function listToArray(list) {
//   let array = [];
//   for (let node = list; node; node = node.rest) {
//     array.push(node.value);
//   }
//   return array;
// }

// function prepend(element, list) {
//   let newList = Object.assign(element, list);
//   return newList;
// }

// console.log(arrayToList([10, 20, 30, 40]));
// console.log(listToArray(arrayToList([10, 20, 30])));
// console.log(prepend(10, prepend(20, null)));
// // console.log(nth(arrayToList([10, 20, 30]), 1));

let parks = [
  { name: "Biscayne", rating: 4.2, driveable: true },
  { name: "Grand Canyon", rating: 5, driveable: false },
  { name: "Gateway Arch", rating: 4.5, driveable: true },
  { name: "Indiana Dunes", rating: 4.1, driveable: true },
  { name: "Yellowstone", rating: 4.9, driveable: false },
  { name: "Glacier", rating: 3.3, driveable: true },
  { name: "Rocky Mountain", rating: 4.2, driveable: true },
  { name: "Olympic", rating: 3.1, driveable: false },
  { name: "Bryce Canyon", rating: 4.3, driveable: true },
  { name: "Hollows Eve", rating: 2.9, driveable: false },
  { name: "Spire Rock", rating: 3.2, driveable: true },
  { name: "Big Bend", rating: 5, driveable: true },
  { name: "Culver City", rating: 3.9, driveable: false },
  { name: "Umbrella Corp", rating: 3.8, driveable: false },
  { name: "Rancid", rating: 4.3, driveable: true },
  { name: "Bad Religion", rating: 4.5, driveable: true },
  { name: "Arches", rating: 5, driveable: true },
];

let numbers = [4, 6, 12, 14, 64, 33, 23, 67, 183, 45, 3, 64];

console.log(numbers.sort((a, b) => a - b));

// function odinProject() {
//   return console.log("This is the Odin Project");
// }

// odinProject();
// //This is new Odin Project Info
// function addOne(number) {
//   let numberPlusOne = number + 1;
//   return console.log(numberPlusOne);
// }

// addOne(15);

// function getDriveableParks(parks) {
//   parks.forEach();
// }

// let highestRatedParks = parks.filter((park) => park.rating >= 4.8);
// console.log(highestRatedParks);

// function findParkNamed(parks, name) {
//   return parks.find((park) => park.name === name);
// }
// // let findParkNamed = parks.find((park) => park.name === "Arches");
// console.log(findParkNamed(parks, "Rancid"));

// function driveableParks(parks) {
//   return parks.filter((park) => park.driveable == true);
// }
// console.log(driveableParks(parks));

// function listOfParkNames(parks) {
//   return parks.map((park) => park.name);
// }
// console.log(listOfParkNames(parks));

// function listOfNamesWithRating(parks) {
//   return parks.map(
//     (park) => `${park.name} National Park has a rating of ${park.rating}.`
//   );
// }
// console.log(listOfNamesWithRating(parks));

// Object.keys(parks).filter((name) => {
//   const rating = parks[name];
//   return rating >= 4.5;
// });

// //sort by rating
// function ratingBestToWorst(parks) {
//   parks.sort((parkA, parkB) => (parkA.rating > parkB.rating ? 1 : -1));
// }

// //sort by alphabet
function alphabatizeMeCapn(parks) {
  parks.sort((parkA, parkB) =>
    parkA.name.toLowerCase() > parkB.name.toLowerCase() ? 1 : -1
  );
  console.log(parks);
}

function rateMeCapn(parks) {
  parks.sort((parkA, parkB) => (parkA.rating < parkB.rating ? 1 : -1));
  console.log(parks);
}
rateMeCapn(parks);
//alphabatizeMeCapn(parks);
// console.log(parks[0].name);
// console.log(parks[1].name);
// console.log(parks[2].name);
// console.log(parks[3].name);
// console.log(parks[4].name);
// console.log(parks[5].name);
// console.log(parks[6].name);
// console.log(parks[7].name);
// console.log(parks[8].name);

const parkReduceObject = parks.reduce((result, park) => {
  result[park.name] = park.rating;
  return result;
}, {});
console.log(parkReduceObject);
