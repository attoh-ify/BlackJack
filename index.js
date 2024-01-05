let player = {
    name: "Alex",
    chips: 145
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let cardsEl = document.querySelector("#cards-el")
let sumEl = document.querySelector("#sum-el")
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber === 1) {
        return 11
    } else if (randomNumber > 10) {
        return 10
    } else {
        return randomNumber
    }
}

function renderGame() {
    let cardText = "Sum:"
    let sum = 0
    for (let i = 0; i < cards.length; i++) {
        cardText += " " + cards[i]
        sum += cards[i]
    }
    cardsEl.textContent = cardText
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got a Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function startGame() {
    isAlive = true
    let fisrtCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [fisrtCard, secondCard]
    renderGame()
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        console.log("Drawind a new card from the deck!")
        let card = getRandomCard()
        cards.push(card)
        renderGame()
    }
}


// Cash Out:
console.log(hasBlackJack)
console.log(isAlive)
