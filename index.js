// Listing all posible options values
const optionsValues = {
    Blue: 'Paper',
    Red: 'Rock',
    Yellow: 'Scissors'
}

const getValue = (valor) => {
    return valor
}

for (valores in optionsValues) {
    let valor = document.querySelector(`.${valores}`)
    valor.addEventListener('click', () => {
        playGame(getValue(valor.name))
    })
}

// Get a random option for PC
let randomOptionPC = () => {
    return optionsValues[Math.floor(Math.random() * optionsValues.length)]
}

// Play the game function
let playGame = (optionUser) => {
    // let optionPC = randomOptionPC()
    // console.log(optionUser, optionPC.name)
    console.log(optionUser)
}