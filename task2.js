function sortStringAlphabetically(inputString) {
  // Convert the string to an array of characters, sort it, and then join it back into a string
  return inputString.split("").sort().join("");
}

let unsortedString = "openai";
let sortedString = sortStringAlphabetically(unsortedString);
console.log(sortedString);
