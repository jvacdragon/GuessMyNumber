'use strict';

let secNum = Math.trunc(Math.random()*20+1)
let num = document.querySelector('.guess')
let score = 20
let highscore = 0

const check = function check(){
    let numN = Number(num.value)
    if(numN == secNum){
        document.querySelector('.number').textContent = `${secNum}`
        document.querySelector('.message').textContent = '🎉 Correct Number'
        document.body.style.backgroundColor = 'green'
    }
    else if(numN == 0){
        document.querySelector('.message').textContent = '⛔️ No number!'
    }
    else if(score > 1){
        score = score - 1
        document.querySelector('.score').textContent = `${score}`
        if(numN < secNum){
            document.querySelector('.message').textContent = '📉 Too low!'
        } else if(numN > secNum){
            document.querySelector('.message').textContent = '📉 Too high!'
        } 
    }
    else{
        document.querySelector('.score').textContent = '0'
        document.querySelector('.message').textContent = `💥 You lost the game!`
    }

}

document.addEventListener('keydown', function(e){
    if(e.key==='Enter')
    check()
})

function again(){
    const numN = Number(num.value)
    document.body.style.backgroundColor = 'black'
    document.querySelector('.number').textContent = `?`
    document.querySelector('.message').textContent = 'Start guessing...'

    if(numN == secNum && score > highscore){
        highscore = score
        document.querySelector('.highscore').textContent = `${highscore}`
    }
    score = 20
    document.querySelector('.score').textContent = `${score}`
    let x = Math.trunc(Math.random()*20+1)
    secNum = x
}

document.querySelector('.again').addEventListener('click', again)