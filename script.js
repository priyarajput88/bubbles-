var timer = document.querySelector('#timerelem');
var hitelem = document.querySelector('#hitelem');
var btmpnl = document.querySelector('#btmpnl');
var scoreelem = document.querySelector('#scoreelem');

var timer = 20;
var score = 0;

var guessNumber;

setInterval(function(){
    if(timer > 0)
    {
        --timer;
        timerelem.textContent = timer;
    }
    else
    {
        btmpnl.innerHTML = '<h1 id="center">Game Over<h1>';
    }

}, 1000);

function makeBubbles(){
    for(var i=0; i<144; i++)
    {
       var randomNumber = Math.floor(Math.random()*10);
       var template = `<div class="crc">${randomNumber}</div>`;
       btmpnl.innerHTML += template;
    }
}

function getNewGuess(){
    guessNumber = Math.floor(Math.random()*10);
    hitelem.textContent = guessNumber;
}

btmpnl.addEventListener('click', function(details){
    var clickedBblValue = details.target.textContent;
    if(clickedBblValue == guessNumber)
    {
        score = score + 10;
        scoreelem.textContent = score;

        getNewGuess();
        btmpnl.innerHTML = '';
        makeBubbles();
    }
})

getNewGuess();
makeBubbles();