var randomNumber1=Math.floor(Math.random()*6)+1;
var imgSrc="images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",imgSrc);
var randomNumber2=Math.floor(Math.random()*6)+1;
var imgSrc2="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",imgSrc2);
if(randomNumber1===randomNumber2){
  document.querySelector("h1").innerHTML="Draw!";
}else if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="🚩 Play 1 Wins!";
}else{
  document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
}
