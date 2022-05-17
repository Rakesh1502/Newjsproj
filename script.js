let firstCard = 10
let secondCard = 4
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

let msgEl = document.getElementById("msg")
let sumEl = document.getElementById("sum")
let cardEl = document.getElementById("card")

function startGame() {
    renderGame()
}

function renderGame() {

    

    if(sum<=20) {
        message= "Do you want to draw a new card??"

    }
    else if(sum === 21){
        message="You have got a BlackJack!!"
        hasBlackJack=true
    }
    else{
        message="Oops You are out of game!!"
        isAlive=false
    }
    msgEl.textContent=message
    sumEl.textContent = "Sum : " + sum
    cardEl.textContent = "Cards : " + cards[0] + " "+ cards[1]
}

function newCard() {
    let card = 8
    sum += card

    renderGame()
}