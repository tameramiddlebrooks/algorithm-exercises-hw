/*
 * Given a string, returns a new string that is the same as the original string with the order of its characters reversed.
 * You're not allowed to use String.prototype.reverse().
 * Returns the new string.
 */

// I gave my reverseString function a parameter of str
// I declared a variable called result and left it empty for the moment
// I created a for loop, and I used str.length -1 to calculate the length of the string minus the last character of it
// I also included i >=0 in my for loop, so the loop will go on, then I placed my decrementor at the end
// Then I've got my result variable, set to result = result + str[i];
// Return result
// Then I used console.log with 'coffee' as an argument to test my code

function reverseString(string) {
  let result = " ";
    for (i = string.length -1; i >= 0; i--) {
      result += string[i]
}
return result;
}
console.log(reverseString('Coffee'));



// describe('reverseString', function() {
//   const assert = require("chai").assert;

//   it('should work for empty string', function() {
//     assert.equal(reverseString(""), "");
//   });

//   it('should work for single-character strings', function() {
//     assert.equal(reverseString("a"), "a");
//     assert.equal(reverseString(" "), " ");
//     assert.equal(reverseString("*"), "*");
//   });

//   it('should work on non-trivial strings', function() {
//     assert.equal(reverseString("cba"), "abc");
//     assert.equal(reverseString("foobar"), "raboof");
//     assert.equal(reverseString("otatop"), "potato");
//     assert.equal(reverseString("foof"), "foof");
//   });
// });