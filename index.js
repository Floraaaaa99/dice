var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

document.querySelector(".img1").setAttribute("src", "dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "dice" + randomNumber2 + ".png");

document.querySelector("h1").classList.add("play");

if (randomNumber1 > randomNumber2) {
  document.querySelector(".play").innerHTML= "Player 1 Wins!"
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector(".play").innerHTML= "Player 2 Wins!"
}
else if (randomNumber1 = randomNumber2){
   document.querySelector(".play").innerHTML= "Draw!"
}
