var firstName = prompt("What is your first name?");
console.log(firstName);
var lastName = prompt("What is your last name?");
var alertName = alert(`Whassup, ${lastName}!`);

var birthday = prompt("Gimme your birthday.\nMM/DD/YYYY");
var birthdayDate = new Date(birthday);

var month = birthdayDate.getUTCMonth() + 1;
var day = birthdayDate.getUTCDate();
var year = birthdayDate.getUTCFullYear();
var confirmDate = `${month} / ${day} / ${year}`;

var confirmBirthday = confirm(`Is this correct?\n${confirmDate}`);
