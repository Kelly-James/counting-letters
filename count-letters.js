var userInput = process.argv.slice(2);
var word = userInput.join('');

// console.log(word);

function countLetters(word) {
  var object = {};
  for(var i = 0; i < word.length; i++) {
    var letter = word.charAt(i);
    if(object[letter]) {
      object[letter] += 1;
    } else {
      object[letter] = 1;
    }
  }
  return object;
}

console.log(countLetters(word));


// console.log(object);

// var word = userInput["input"];
// var wordObj = {char: word.split('')};
// var letter = wordObj["char"];

// console.log(typeof wordObj);

// console.log(word);

// function countLetters(userInput) {
//   for(var i = 0; i < word.length; i++) {
//     letterArray.push(word.slice(i, i + 1));

//     // console.log(word[i]);
//   }
//     return letterArray;
// }

// console.log(countLetters());
// console.log(letterArray);
