/**
 * Determines whether the given string is a palindrome, i.e. if you were to reverse the order of the characters inside the string, you would get back the original string.
 */

// I gave my isPalindrome function a parameter of string
// I declared a variable called reverseString
// When setting the value of my variable, I used my function parameter 'string' and attatched the split method to it so I could split the string on the spaces, along with the reverse method to reverse my string, and the join method to concatenate my string.
// Return my reverseString variable and set it equal to my string parameter
// I used console.log with 'aToyota', 'Good afternoon!' and 'racecar' to test my code

function isPalindrome(string) {
  let reverseString = string.split (' ').reverse().join(' ');
  return reverseString == string;

}
console.log(isPalindrome('aToyota'));
console.log(isPalindrome('Good afternoon!'));
console.log(isPalindrome('racecar'));

// describe('isPalindrome', function() {
//   const assert = require("chai").assert;

//   it('works for empty string', function() {
//     assert.isTrue(isPalindrome(''));
//   });

//   it('works for single characters', function() {
//     assert.isTrue(isPalindrome('x'));
//     assert.isTrue(isPalindrome('c'));
//   });

//   it('works for double characters', function() {
//     assert.isTrue(isPalindrome('xx'));
//     assert.isTrue(isPalindrome('gg'));
//     assert.isFalse(isPalindrome('af'));
//     assert.isFalse(isPalindrome('yt'));
//   });

//   it('works for words', function() {
//     assert.isTrue(isPalindrome('racecar'));
//     assert.isFalse(isPalindrome('potato'));
//   });
// });