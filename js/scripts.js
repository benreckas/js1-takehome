// Prompt user for name and store it in var name
var name = prompt("What's your name?");
// Prompt user for favorite color and store it in var favColor
var favColor = prompt("What's your favorite color?\nEnter custom color or choose one from below!\nRed\nOrange\nYellow\nGreen\nBlue\nPurple\nPink\nBlack\nGray\nWhite", "Favorite Color");
// change any entry to all lower case letters
favColor = favColor.toLowerCase();

// run entry through logic switch and alert a response based on entry
switch(favColor) {
  case "red":
    alert("Little red corvette!");
    break;
  case "orange":
    alert("Orange you glad I didn't say banana.");
    break;
  case "yellow":
    alert("Yellow everybody this is Purge.");
    break;
  case "green":
    alert("...eggs and ham");
    break;
  case "blue":
    alert("dabu-di dabe-die.");
    break;
  case "purple":
    alert("Purple rain. RIP Prince.");
    break;
  case "pink":
    alert("Really? Nobody's favorite color is pink.");
    break;
  case "black":
    alert("MIB");
    break;
  case "gray":
    alert("Mashed potatoes and gray v. #baddadjoke");
    break;
  case "white":
    alert("Follow the white rabbit.");
    break;
  default:
    alert(`Cool, your favrite color is ${favColor}!`);
    break;
}
