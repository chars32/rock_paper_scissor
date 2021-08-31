const boardScore = document.querySelector('#boardscore')
const boardScoreResult = document.querySelector('#boardScoreResult')
const userChoose = document.querySelector('#userChoose')
const pcChoose = document.querySelector('#pcChoose')
const buttonReset = document.querySelector('#reset')
const playAgain = document.querySelector('#play')
const boardScoreResultShow = document.querySelector('#boardScoreResult__score')
const scoreboardTableScore = document.querySelector('#scoreboard__table__score')
const resetButton = document.querySelector('#reset')

// An object of the colors with their game options
const optionsValues = {
    Blue: 'Paper',
    Red: 'Rock',
    Yellow: 'Scissors'
}

let scoreCount = 0

/* 
    Function to return the value of the element
    with the addeventlistener

*/
const getValue = (item) => {
    return item
}

// A loop to add the eventlistener to the img elements
for (values in optionsValues) {
    let itemSelected = document.querySelector(`.${values}`)
    itemSelected.addEventListener('click', () => {
        playGame(getValue(itemSelected.name))
    })
}

// Get a random option for PC
let randomOptionPC = () => {
    return Object.values(optionsValues)[
        Math.floor(Math.random() * Object.values(optionsValues).length)
    ]
}

// Function to draw the images
const drawImage = (imageOptions) => {
    let usrImg = document.createElement('img')
    usrImg.src = `./assets/${imageOptions}.png`
    return usrImg
}

// Function to verificate length of the pc and user options
const verificateLength = (userChoose, pcChoose) => {
    if (userChoose.children.length > 0) {
        userChoose.removeChild(userChoose.children[0])
        pcChoose.removeChild(pcChoose.children[0])
    }
}

// Function change de innerHTML of the p tag in
// #boardScoreResult__score html element
const resultGame = (result) => {
    boardScoreResultShow.children[0].innerHTML = result
    if (result === 'Win') {
        scoreCount++
        scoreboardTableScore.innerHTML = scoreCount
    }
}

// --- Play the game function ---
let playGame = (optionUser) => {
    let optionPC = randomOptionPC()

    verificateLength(userChoose, pcChoose)

    // Bringin back the boardScoreResult
    boardScoreResult.style.display = 'flex'

    // Draw the images
    userChoose.appendChild(drawImage(optionUser))
    pcChoose.appendChild(drawImage(optionPC))


    // logic of the game
    if (optionUser === 'Rock' && optionPC === 'Scissors') {
        resultGame('Win')
    } else if (optionUser === 'Scissors' && optionPC === 'Paper') {
        resultGame('Win')
    } else if (optionUser === 'Paper' && optionPC === 'Rock') {
        resultGame('Win')
    } else if (optionUser === optionPC) {
        resultGame('Tie')
    }
    else {
        resultGame('Loose')
    }
}

// Buttons reset and play
buttonReset.addEventListener('click', () => {
    console.log('reset')
})

// Eventlistener show the boardScoreResult
playAgain.addEventListener('click', () => {
    boardScoreResult.style.display = 'none'
})

// Eventlistener reset the score
resetButton.addEventListener('click', () => {
    scoreCount = 0
    scoreboardTableScore.innerHTML = scoreCount
})