var player1= Math.floor(Math.random()*6)+1;
var randomDiceimg="dice"+player1+".png";
var randomDiceimg="img/"+randomDiceimg;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src" , randomDiceimg);


var player2= Math.floor(Math.random()*6)+1;
var randomDiceimg="dice"+player2+".png";
var randomDiceimg="img/"+randomDiceimg;
var image1=document.querySelectorAll("img")[1];
image1.setAttribute("src" , randomDiceimg);

if (player1>player2) {
    document.querySelector("h1").innerHTML="🚩 Player1 win ";
} 
else if(player1<player2){ 
    document.querySelector("h1").innerHTML=" Player2 win 🚩";
}
else
document.querySelector("h1").innerHTML=" Draw";