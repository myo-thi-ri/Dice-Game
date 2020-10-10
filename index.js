var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;

var diceRandomImage1 = "dice"+randomNumber1+".png";
var diceRandomImageSource1 = "images/"+diceRandomImage1;

var diceRandomImageSource2 = "images/dice"+randomNumber2+".png";

var diceimg = document.querySelectorAll('img');

diceimg[0].setAttribute('src',diceRandomImageSource1)
diceimg[1].setAttribute('src',diceRandomImageSource2)



if(randomNumber1 > randomNumber2){
    document.querySelector('h1').innerHTML = "🚩Player 1 Wins!";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector('h1').innerHTML = "Player 2 Wins!🚩";
}
else{
    document.querySelector('h1').innerHTML = "Draw!";
}

