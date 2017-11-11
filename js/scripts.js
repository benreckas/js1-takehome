// Create an array with 3 indexes, each of those will hold a sub-array
for (let i = 0; arrToDo.length <= 2; i++) {
  // Ask user for to do item
  let item = prompt("Tell me the something you want to do this weekend.", "Ice fishing");
  // Change response to lowercase
  item = item.toLowerCase();
  // Ask user how many days it will take to complete it
  let deadline = prompt(`How many days will it take you to finish ${item}?`, "1");
  // Parse string of number into integer
  deadline = parseInt(deadline);
  // Place both user responses into an array and push it to the main array
  arrToDo.push([item, deadline]);
  // By comparing the amount of time two item will take to complete,
  // sort the sub arrays within the to do list from shortest to longest.
  arrToDo.sort((a, b) => {return a[1] - b[1]});
};

console.log("This will take you the longest", arrToDo[2]);

// Loop through the first two indexes of the array and add the sring "done" to the sub array,
// then alert the user that those tasks are completed.
for (let i = 0; i < (arrToDo.length - 1); i++) {
  arrToDo[i].push("Done");
  alert(`Nice job, you're done with: ${arrToDo[i][0]}`);
};

console.log("Final Array", arrToDo);

    break;
  case "white":
    alert("Follow the white rabbit.");
    break;
  default:
    alert(`Cool, your favrite color is ${favColor}!`);
    break;
}
