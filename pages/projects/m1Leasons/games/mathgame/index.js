const game = document.getElementById('game');
const canvas = document.getElementById('canvas');
const buttons = document.getElementById('buttons');
const problemDisplay = document.getElementById('problem');
const playerInput = document.getElementById('result')
const scoreDisplay = document.getElementById('score')
let gameScore = 0;
let a, b;
let gameLevel = 10;
let p = document.getElementById('green')

function removeAnim(){
    p.classList.remove('anim')
}

function getRandomNumber(diff){
    return Math.floor(Math.random() * diff) + 1
}

function newProblem(diff){
    a = getRandomNumber(diff)
    b = getRandomNumber(diff)

    problemDisplay.style.color = 'white'

    return a + '+' + b
}

function newGame(diff) {
    gameLevel = diff
    gameScore = 0
    scoreDisplay.textContent = gameScore
    problemDisplay.textContent = newProblem(diff)
}
newGame(gameLevel)

function verifyResult() {
    if(playerInput.value == a+b){
        gameScore = gameScore + gameLevel
        scoreDisplay.textContent = gameScore
        problemDisplay.textContent = newProblem(gameLevel)
        playerInput.value = ''
        p.classList.add('anim')
        setTimeout(removeAnim,200)
    }
    else{
        problemDisplay.style.color = 'red'
        playerInput.value = ''
    }
}

playerInput.addEventListener('keydown', function(e){
    if(e.key == 'Enter'){
        verifyResult()
    }
})

