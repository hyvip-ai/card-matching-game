<script>
  export let card = "";
  $:frameWork = card.replace(".svg", "").slice(1);
</script>

<div class="memory_card" data-framework={frameWork}>
  <img class="front" src="/front.svg" alt="front" />

  <img class="back" src={card} alt={frameWork} />
</div>

<style>
  .memory_card {
    width: calc(33.333% - 10px);
    position: relative;
    margin: 5px;
    cursor: pointer;
    transform-style: preserve-3d;
    transition: all 0.5s;
    transform: rotateY(180deg);
  }

  .front {
    position: absolute;
    background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    padding: 35px;
    border-radius: 8px;
    backface-visibility: hidden;
    transform: rotateY(180deg);
  }
  .back{
    height: 100%;
    background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
    width: 100%;
    border-radius: 8px;
    object-fit: contain;
    padding: 35px;
  }

</style>
