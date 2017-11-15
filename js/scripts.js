//Square Root Function


// sqrt(prompt("Give me a number. I'll return it's square root."));
//
// function sqrt(num) {
//   num = parseInt(num);
//   if (isNaN(num)) {
//     alert(`Sorry, that isn't a number!`);
//     sqrt(prompt("Give me a number. I'll return it's square root."));
//   }
//   num = Math.sqrt(num);
//   console.log(num);
// };


// Capitalize Function


var userStr = prompt("Tell me your secrets.");
capitalize(userStr);

function capitalize(str) {
  str = str.toLowerCase();
  var arrStr = str.split('.');
  var newStr;
  for(let i = 0; i <= arrStr.length; i++) {
  newStr += arrStr[i].charAt(0).toUpperCase() + arrStr[i].slice(1);
  };
  return console.log(newStr);
};

capitalize();
