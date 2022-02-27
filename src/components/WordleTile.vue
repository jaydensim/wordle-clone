<script setup>
import { useMainStore } from "../stores/main.js";
import { useSettingsStore } from "../stores/settings";

const mainStore = useMainStore();
const settingsStore = useSettingsStore();

defineProps({
  rowIndex: Number,
  tileIndex: Number,
});
</script>

<template>
  <figure
    class="wordle-tile"
    :data-selected="
      mainStore.currentPosition[0] == rowIndex &&
      mainStore.currentPosition[1] == tileIndex &&
      mainStore.focused == true
    "
    :data-status="mainStore.currentBoard[rowIndex][tileIndex].status"
    :data-delay="tileIndex"
    :data-highcontrast="settingsStore.highContrast"
  >
    <p>
      {{ mainStore.currentBoard[rowIndex][tileIndex].letter }}
    </p>
  </figure>
</template>

<style scoped>
figure.wordle-tile {
  --color-default: #f3f6f9;
  --color-default-background: #ffffff;
  --color-active: #7fb1b9;
  --color-active-background: #d6f1f32b;
  --color-incorrect: #cf908f;
  --color-incorrect-background: #f3dcddeb;
  --color-correctPosition: #9adaa1;
  --color-correctPosition-background: #d6f3d8;
  --color-correctLetter: #dbc491;
  --color-correctLetter-background: #e7d4ac;
  --color-inactive: #8c97a1;
  --color-inactive-background: #dae2e8;
  --color-current: var(--color-default);
  --color-current-background: var(--color-default-background);
}

figure.wordle-tile[data-highcontrast="true"] {
  --color-default: #c4c4c4;
}
.wordle-tile[data-selected="true"] {
  --color-current: var(--color-active) !important;
  --color-current-background: var(--color-active-background);
  transition: 0s linear;
  animation: pulse 1s cubic-bezier(0.79, 0.14, 0.15, 0.86) infinite;
}
figure.wordle-tile[data-status="incorrect"] {
  --color-current: var(--color-default);
  --color-current-background: var(--color-default-background);
  color: #ffffff00;
  animation: faliure 1s cubic-bezier(0.79, 0.14, 0.15, 0.86);
  transition-delay: calc(attr(data-delay) * 0.1s);
}
figure.wordle-tile[data-status="correctPosition"] {
  --color-current: var(--color-correctPosition);
  --color-current-background: var(--color-correctPosition-background);
  animation: none;
}
figure.wordle-tile[data-status="correctLetter"] {
  --color-current: var(--color-correctLetter);
  --color-current-background: var(--color-correctLetter-background);
  animation: none;
}
figure.wordle-tile[data-status="inactive"] {
  --color-current: var(--color-inactive);
  --color-current-background: var(--color-inactive-background);
}

figure.wordle-tile {
  width: 75px;
  height: 75px;
  aspect-ratio: 1/1;
  border-radius: 8px;
  background-color: var(--color-current-background);
  border: 2px solid var(--color-current);
  margin: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border 0.2s ease-out;
}
p {
  font-size: 50px;
  font-variation-settings: "wght" 800;
  line-height: 50px;
}

@keyframes pulse {
  50% {
    background-color: var(--color-default-background);
    border: 2px solid var(--color-default);
  }
}
@keyframes faliure {
  10% {
    border: 2px solid var(--color-incorrect);
    background-color: var(--color-incorrect-background);
  }
  100% {
    border: 2px solid var(--color-current);
    background-color: var(--color-default-background);
    color: #ffffff00;
  }
}
</style>
