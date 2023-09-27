function reverseNumber(num) {
  let reversedNum = 0;

  while (num !== 0) {
    reversedNum = reversedNum * 10 + (num % 10);
    num = Math.floor(num / 10);
  }

  return reversedNum;
}

let numToReverse = 12345;
let reversedNum = reverseNumber(numToReverse);
console.log(reversedNum); // Output: 54321
