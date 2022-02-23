<script setup>
import WordleTile from "./WordleTile.vue";
import { useMainStore } from "../stores/main.js";
const mainStore = useMainStore();
</script>

<template>
  <article class="grid-renderer">
    <section
      v-for="(boardRow, rowIndex) in mainStore.currentBoard"
      class="row-group"
    >
      <WordleTile
        v-for="(tile, tileIndex) in mainStore.currentBoard[rowIndex]"
        :rowIndex="rowIndex"
        :tileIndex="tileIndex"
      />
    </section>
  </article>
</template>

<style scoped>
.grid-renderer {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-row-gap: 10px;
}
.row-group {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 10px;
  width: max-content;
  margin: 0px auto;
}
</style>
