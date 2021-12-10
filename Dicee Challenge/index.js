function generateRandomInt(min,max){
    return Math.floor((Math.random() * (max+1 -min)) +min);
}

let header = document.querySelector('h1');
let dice1 = document.querySelector('.img1');
let dice2 = document.querySelector('.img2');

let player1roll = generateRandomInt(1,6);
let player2roll = generateRandomInt(1,6);

// console.log(player1roll);
// console.log(player2roll);

dice1.setAttribute('src', `images/dice${player1roll}.png`);
dice2.setAttribute('src', `images/dice${player2roll}.png`);

if (player1roll > player2roll) {
    header.textContent = "🚩Player1 Wins!";
}
else if (player1roll < player2roll) {
    header.textContent = "Player2 Wins!🚩";
} else{
    header.textContent = "It's a draw...";
}