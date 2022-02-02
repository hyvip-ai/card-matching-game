import { gameData } from "../store";
let firstCard, secondCard, firstFramework, secondFramework;
let firstClicked = false;
let lockBoard = false;
let matched;
function clicked() {
  if (lockBoard) {
    return;
  }
  if (this === firstCard) {
    return;
  }
  this.classList.add("fliped");
  if (!firstClicked) {
    console.log("FirstClick");
    firstFramework = this.dataset.framework;
    firstCard = this;
    firstClicked = true;
    matched = false;
  } else {
    secondCard = this;
    secondFramework = this.dataset.framework;
    matched = checkCards();
    firstClicked = false;
  }
  updateStore(matched);
}
function checkCards() {
  console.log(firstFramework, secondFramework);
  return firstFramework === secondFramework ? removeListeners() : resetCards();
}
function removeListeners() {
  firstCard.removeEventListener("click", clicked);
  secondCard.removeEventListener("click", clicked);
  firstCard = "";
  secondCard = "";
  return true;
}
function resetCards() {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove("fliped");
    secondCard.classList.remove("fliped");
    lockBoard = false;
    firstCard = "";
    secondCard = "";
  }, 1000);
  return false;
}
function updateStore(matched) {
  gameData.update((prev) => {
    return matched
      ? { ...prev, move: prev.move + 1, matched: prev.matched + 1 }
      : { ...prev, move: prev.move + 1 };
  });
}
export { clicked };
