function randomBetweenEdges(min,max){
    return Math.floor((Math.random() * (max+1 -min)) +min);
}

let strr = "";
for (let i = 0; i < 1000; i++) {
    strr += randomBetweenEdges(1,6) + ',';
}
console.log(strr);

const name1 = prompt("User, enter the first name: ");
const name2 = prompt("User, enter the second name: ");

const loveScore = randomBetweenEdges(1,100);

console.log("The love score is: " + loveScore + "%");