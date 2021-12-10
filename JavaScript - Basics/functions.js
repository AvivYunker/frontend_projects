// 4 types of functions
// doesn't receive arguments and doesn't return values
function sayHello() {
    alert("Hello World");
}
// doesn't receive arguments but returns values
function addTwoNumbers() {
    return 5 + 7;
}
// receives arguments but doesn't returns values
function addTwoNumbers(num1, num2) {
    print(num1 + num2);
}
// both receives arguments and returns values
function addTwoNumbers(num1, num2) {
    return (num1 + num2);
}

// recieves / returns
// 00
// 01
// 10
// 11

function buyMilk(dollars) {
    return Math.floor(dollars / 1.5);
}