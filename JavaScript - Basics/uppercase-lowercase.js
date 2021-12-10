// uppercase - converts all characters to uppercase
// lowercase - converts all characters to lowercase
let myName = "Aviv";
console.log(myName.toUpperCase);
console.log(myName.toLowerCase);

let fullName = prompt("User, enter your full name:")
let editedFullName = fullName.slice(0,1).toUpperCase() + fullName.slice(1, fullName.length).toLowerCase();
console.log(editedFullName);