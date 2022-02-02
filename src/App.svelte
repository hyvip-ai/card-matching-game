<script>
  import Row from "./components/Row.svelte";
  import { getArray } from "./functions/getArray";
  import { onMount } from "svelte";
  import { clicked } from "./functions/gameLogic";
  //add a store to stoee move and winnig condition

  const myCards = getArray();
  let cards = [];
  onMount(() => {
    cards = document.querySelectorAll(".memory_card");
    cards.forEach((card) => {
      card.addEventListener("click", clicked);
    });
  });
  console.log(cards);
</script>

<main>
  <h1>Welcome To Memory Card Game</h1>
  <div class="game_container">
    {#each myCards as cards}
      <Row {cards} />
    {/each}
  </div>
</main>

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
