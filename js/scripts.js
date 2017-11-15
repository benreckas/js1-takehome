//Square Root Function

sqNum(prompt("Give me a number. I'll square it.", "9"));

function sqNum(num) {
  num = parseInt(num);
  if (isNaN(num)) {
    alert(`Sorry, that isn't a number!`);
    sqNum(prompt("Give me a number. I'll return it's square root."));
  }
  num = num * num;
  return(alert(`Your number squared is equal to ${num}`));
};

// Capitalize Function

capitalize(prompt("Tell me something, yo."));

function capitalize(str) {
  str = str.toLowerCase().split('. ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    str[i] = `${str[i]}.`;
  }
  return alert(str.join(' '));
};

// Flip the first and second half of a String Function.

reverseStr(prompt("Tell me a word and I'll flip the front and back half.", "Yin Yang"));

function reverseStr(str) {
  var half = Math.floor(str.length / 2);
  var newStr = str.substr(half) + str.substr(0, half);
  return alert(newStr);
};
