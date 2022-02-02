<script>
  import Row from "./components/Row.svelte";
  import { getArray } from "./functions/getArray";
  import { onMount } from "svelte";
  import { clicked} from "./functions/gameLogic";
  import { gameData } from "./store";
  import WinModal from "./components/WinModal.svelte";
  let myCards = getArray();
  let cards = [];
  let game_data = {};
  onMount(() => {
    cards = document.querySelectorAll(".memory_card");
    cards.forEach((card) => {
      card.addEventListener("click", clicked);
    });
    gameData.subscribe((data) => {
      game_data = { ...data };
    });
  });

  const resetGame = () => {
    gameData.update((prev) => {
      return {
        move: 0,
        matched: 0,
      };
    });
    cards = document.querySelectorAll(".memory_card");
    cards.forEach((card) => {
      card.classList.remove("fliped");
      card.addEventListener("click", clicked);
    });
    myCards = getArray();
  };
</script>

<main>
  <h1>Welcome To Memory Card Game</h1>
  <div class="game_container">
    {#each myCards as cards}
      <Row {cards} />
    {/each}
  </div>
</main>
<div class="score_board">
  <h6>ScoreBoard</h6>
  <p>Moves : {Math.floor(game_data.move/2)}</p>
  <p>Matched : {game_data.matched}</p>
</div>
{#if game_data.matched === 6}
  <WinModal on:reset-game={resetGame} />
{/if}

<style>
  main {
    height: 100%;
    width: 100%;
    background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 2.5em;
    font-weight: 400;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    text-align: center;
    padding: 5px 0px;
  }
  h6 {
    color: #ff3e00;
    font-size: 15px;
  }
  .score_board {
    position: absolute;
    top: 20%;
    text-align: center;
    width: 150px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .game_container {
    background-color: white;
    width: 640px;
    height: 640px;
    margin: auto;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 18px;
    padding: 10px;
    transform: perspective(1000px);
  }
</style>
