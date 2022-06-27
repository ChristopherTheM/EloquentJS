console.log("Solutions Central");

//This is the solution to exercise 2.1
for (let result = "#"; result.length <= 7; result = result + "#") {
  console.log(result);
}

//This is the solution to exercise 2.2
for (let number = 0; number <= 100; number++) {
  let result = "";
  if (number % 3 == 0) result += "fizz";
  if (number % 5 == 0) result += "buzz";
  console.log(result || number);
}
