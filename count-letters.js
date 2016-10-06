// taking user input and converting it to a string
var userInput = process.argv.slice(2);
var word = userInput.join('');

// for loop creating an object with key/value pairs where key
// is letter and value is the count
function countLetters(word) {
  var object = {};
  for (var i = 0; i < word.length; i++) {
    var letter = word.charAt(i);
    if (!object[letter]) {
      object[letter] = 1;
    } else {
      object[letter] += 1;
    }
  }
  return object;
}

// formating output
var letterObj = countLetters(word);
console.log('{');
for (var objKey in letterObj) {
  var objValue = letterObj[objKey];
  console.log('  ' + objKey + ': ' + objValue + ',');
}
console.log('}');


