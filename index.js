// An object of the colors with their game options
const optionsValues = {
    Blue: 'Paper',
    Red: 'Rock',
    Yellow: 'Scissors'
}

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
    return Object.values(optionsValues)[Math.floor(Math.random() * Object.values(optionsValues).length)]
}

// Play the game function
let playGame = (optionUser) => {
    let optionPC = randomOptionPC()

    console.log(optionUser, optionPC)
    
    // logic of the game
    if (optionUser === 'Rock' && optionPC === 'Scissors') {
        console.log('Ganaste')
    } else if (optionUser === 'Scissors' && optionPC === 'Paper') {
        console.log('Ganaste')
    } else if (optionUser === 'Paper' && optionPC === 'Rock') {
        console.log('Ganaste')
    } else if (optionUser === optionPC) {
        console.log('Empate')
    }
    else {
        console.log('Perdiste')
    }
}
