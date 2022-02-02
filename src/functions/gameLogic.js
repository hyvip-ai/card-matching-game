let firstCard, secondCard, firstFramework, secondFramework;
let firstClicked = false;
let lockBoard = false;
let moves = 0;
let cardMatched = 0
function clicked() {
  if (lockBoard) {
    return;
  }
  countMoves()
  this.classList.add("fliped");
  if (!firstClicked) {
    firstFramework = this.dataset.framework;
    firstCard = this;
    firstClicked = true;
  } else {
    secondCard = this;
    secondFramework = this.dataset.framework;
    checkCards();
    firstClicked = false;
  }
  return {moves,cardMatched}
}
function checkCards() {
  firstFramework === secondFramework ? removeListeners() : resetCards();
}
function removeListeners() {
  firstCard.removeEventListener("click", clicked);
  secondCard.removeEventListener("click", clicked);
  cardMatched++;
}
function resetCards() {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove("fliped");
    secondCard.classList.remove("fliped");
    lockBoard = false;
  }, 1500);
}
function countMoves() {
   moves++;
   console.log(Math.floor(moves/2))
}
export { clicked, countMoves };
