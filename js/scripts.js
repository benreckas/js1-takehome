var arrToDo = [];

for (let i = 0; arrToDo.length <= 2; i++) {
let item = prompt("Tell me the something you want to do this weekend.", "Ice fishing");
item = item.toLowerCase();
let deadline = prompt(`How many days will it take you to finish ${item}?`, "1");
deadline = parseInt(deadline);
arrToDo.push([item, deadline]);
console.log(arrToDo);
};
