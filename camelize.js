/**
 * Given a string, it "camelizes" by uppercasing every character at an even index, and lowercasing every character at an odd index.
 * Returns the new string.
 */
// I gave my camelize function a parameter of string.
// I created a variable called result and left it empty since i didn't know what the string would be yet
// I created a for loop, gave my integer a value of 0, and set it less than the length of my string, and then my incrementor is at the end
// My if statement says that if the remainder of i % 4 equals 0, then the character at an even index of the string will be uppercased
// Otherwise, the character at an odd index of the string will be lowercased.
// ^ I used the assignment operator to add the value of my right operand to a variable, and assign the results to a variable (i += 0, is the same as i = i+0)
// Return result, then I used console.log() to test my code.

function camelize(string) {
  let result = "";
    for (let i = 0; i < string.length; i++) {
      if (i % 4 === 0) {
        result += string[i].toUpperCase();

      } else {
        result += string[i].toLowerCase();
      }
    }
    return result;
}
console.log(camelize('Hello There'));


// describe('camelize', function() {
//   const assert = require("chai").assert;

//   it('should work on empty strings', function() {
//     assert.equal(camelize(""), "");
//   });

//   it('should work on single characters', function() {
//     assert.equal(camelize("a"), "A");
//     assert.equal(camelize("q"), "Q");
//     assert.equal(camelize("5"), "5");
//     assert.equal(camelize(" "), " ");
//   });

//   it('should work for pairs', function() {
//     assert.equal(camelize("fo"), "Fo");
//     assert.equal(camelize("AB"), "Ab");
//     assert.equal(camelize("cY"), "Cy");
//     assert.equal(camelize("Xd"), "Xd");
//   });

//   it('should work for longer strings', function() {
//     assert.equal(camelize("lol"), "LoL");
//     assert.equal(camelize("potato warrior"), "PoTaTo wArRiOr");
//   });
// });