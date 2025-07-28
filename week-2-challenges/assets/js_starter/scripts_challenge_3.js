// Challenge 3 Starter
// Initialise the array
let numbers = [1, 2, 3, 4, 5, 6];
let documentOutput = document.getElementById("OutputField");

// Check if the array includes the number 5

const greaterthan5 = numbers.filter((number) => {
  if (numbers.includes(5)) {
    filterNumbers = numbers.filter((number) => number >= 5);
    outputNumbers = filterNumbers.map((number) => number * number);
    documentOutput.innerHTML = filterNumbers;
  } else {
    documentOutput.innerHTML = "The number 5 is not in the array.";
    console.log("The number 5 is not in the array.");
  }
});

// If true, filter out numbers less than 5

// Then square each number in the resulting array

// Output the final array

// Output a message if the number 5 is not in the array
