/**
 * Determines whether the given number is a prime number, i.e. it is not divisible by any integers other than 1 and itself.
 * Returns true or false.
 */

// I set the parameter of my isPrime function to num
// I used my if statement, to declare that if num is equal to 1, it will return false (1 is not a prime number)
// If num is equal to 2, it will return true (2 is a prime number and prime numbers can only be positive)
// I did a for statement to loop through the positive numbers, to check if the number used in the argument can be divided by a positive number
// I used the conditional statement 'if num % i ==0" to check if the number can be divided by a number besides 1 or itself, if it can, it will return false
// I used console.log containing arguments of 14, 2, and 50 to test my code.

function isPrime(num) {
  if (num === 1) {
    return false;
  } else if (num === 2){ 
    return true;
  } else {
    for (i = 2; i < num; i++) {
      if (num % i == 0) {
    return false;
    }

  }
  return true;
}

}
console.log(isPrime(14));
console.log(isPrime(2));
console.log(isPrime(50));

// describe('isPrime', function() {
//   const assert = require("chai").assert;

//   it('should handle 1', function() {
//     assert.isFalse(isPrime(1));
//   });

//   it('should handle 2', function() {
//     assert.isTrue(isPrime(2));
//   });

//   it('should detect primes', function() {
//     assert.isTrue(isPrime(3));
//     assert.isTrue(isPrime(5));
//     assert.isTrue(isPrime(7));
//     assert.isTrue(isPrime(23));
//   });

//   it('should not have false positives', function() {
//     assert.isFalse(isPrime(4));
//     assert.isFalse(isPrime(72));
//     assert.isFalse(isPrime(99));
//     assert.isFalse(isPrime(21));
//     assert.isFalse(isPrime(10));
//   });
// });