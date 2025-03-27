const gameBoard = document.querySelector('.game-board');
const cardValues = ['🍎', '🍌', '🍇', '🍉', '🍒', '🍓', '🥝', '🍍']
let cards = [...cardValues, ...cardValues];
let firstCard = null
secondCard = null;
let lockBoard = false;

cards.sort(() => Math.random() - 0.5);

cards.forEach((value) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.value = value;
    card.innerHTML = '<span class="hidden">${value}</span>';
    card.addEventListener('click', flipCard);
    gameBoard.appendChild(card);
});

function flipCard() {
    if (lockBoard || this.classList.contains('flipped')) return;
    
    
    this.classList.add('flipped');
    this.innerHTML = this.dataset.value;
    

    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;
    lockBoard = true;

    checkForMatch();
}

function checkForMatch() {
    if (firstCard.dataset.value === secondCard.dataset.value) {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
        resetBoard();
    } else {
        setTimeout(() => {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            firstCard.innerHTML = '<span class="hidden">${firstCard.dataset.value}</span>';
            secondCard.innerHTML = '<span class="hidden">${secondCard.dataset.value}</span>';
            resetBoard();
        }, 1000);
    }
}

function resetBoard() {
    firstCard = null;
    secondCard = null;
    lockBoard = false;
}