<script>
  import Card from "./Card.svelte";
  export let cards = [];
</script>

<div class="row">
  {#each cards as card}
    <Card {card} />
  {/each}
</div>

<style>
  .row {
    display: flex;
    width: 100%;
    height: calc(25% - 8px);
    margin: 5px 0px;
  }
</style>
