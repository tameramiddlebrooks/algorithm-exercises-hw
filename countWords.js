/**
 * Given a string, counts the number of words inside it. Each word is separated by a single space character.
 */
// The countWords function is declared with a string parameter
// Then I just used the return keyword with the split method attatched so I could split the string on the spaces.
// I also attached the length property to count the number of words in the string
// Then I used console.log with "Good afternoon" as the argument to test my code.

function countWords(string) {
    return string.split(" ").length;
  }
console.log(countWords('Good afternoon'));

// describe('countWords', function() {
//   const assert = require("chai").assert;

//   it('should work for empty strings', function() {
//     assert.equal(countWords(""), 0);
//   });

//   it('should work for simple strings', function() {
//     assert.equal(countWords("a b c"), 3);
//     assert.equal(countWords("hello"), 1);
//     assert.equal(countWords("hello world"), 2);
//   });
// });