// Asks for users first name and logs answer to console
var firstName = prompt("What is your first name?");
console.log(firstName);
// Asks for users last name and alerts the answer in the window
var lastName = prompt("What is your last name?");
var alertName = alert(`Whassup, ${lastName}!`);
// Asks for users birthday
var birthday = prompt("Gimme your birthday.\nMM/DD/YYYY");
// Inserts users birthday into Date object
var birthdayDate = new Date(birthday);
// Retrieves the month day and year and assigns them in a string to confirmDate
var month = birthdayDate.getUTCMonth() + 1;
var day = birthdayDate.getUTCDate();
var year = birthdayDate.getUTCFullYear();
var confirmDate = `${month} / ${day} / ${year}`;
// Asks user to confirm their birthday
var confirmBirthday = confirm(`Is this correct?\n${confirmDate}`);
