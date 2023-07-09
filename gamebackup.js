let randomNumber = Math.floor(Math.random() * 20);
console.log('randomNumber', randomNumber);
const cheeckBtn = document.querySelector('.check');
const playAgain = document.querySelector('.again');
let score = 20;
let prevhighscore;
scoreEle = document.querySelector('#scored');
scoreEle.innerHTML = score;
let highScore = 0;

cheeckBtn.addEventListener('click', function () {
    gueesNum = Number(document.querySelector('#number').value);
    console.log('gueesNum', typeof (gueesNum));
    if (gueesNum) {
        if (randomNumber == gueesNum) {
            // the user is right
            document.querySelector('#checker').innerHTML = 'Correct Guesss';
            document.body.style.backgroundColor = 'green';
            // highScore = score;
            highScore = highScore > score ? highScore : score;
            document.querySelector('#highscored').innerHTML = highScore;
        } else if (randomNumber > gueesNum) {
            // Too Low
            document.querySelector('#checker').innerHTML = 'Too Low';
            document.body.style.backgroundColor = 'blue';
            score -= 1;
            scoreEle.innerHTML = score;
        } else {
            // Too Highh
            document.querySelector('#checker').innerHTML = 'Too High';
            document.body.style.backgroundColor = 'orange';
            score -= 1;
            scoreEle.innerHTML = score;
        }
    }

});

playAgain.addEventListener('click', function () {
    document.querySelector('#checker').innerHTML = null;
    score = 20;
    scoreEle.innerHTML = score;
    document.body.style.backgroundColor = 'black';
    document.querySelector('input').value = null;
    randomNumber = Math.floor(Math.random() * 20);
    console.log('Updated randomNumber', randomNumber);
});

