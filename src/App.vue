<script setup>
import Watermark from "./components/Watermark.vue";
import StandardHeader from "./components/StandardHeader.vue";
import GameBoardRenderer from "./components/GameBoardRenderer.vue";
import BackgroundModal from "./components/BackgroundModal.vue";

import { ref } from "vue";
import { useMainStore } from "./stores/main.js";
import { useLocaleStore } from "./stores/locale.js";
import { useSettingsStore } from "./stores/settings.js";

const mainStore = useMainStore();
const localeStore = useLocaleStore();
const settingsStore = useSettingsStore();
localeStore.initalise(settingsStore.language);
let hiddenInput = ref.hiddenInput;

setTimeout(() => {
  document.addEventListener("keydown", (e) => {
    if (e.key == "Backspace") {
      mainStore.registerBackspace();
    } else if (e.key == "Enter") {
      mainStore.checkWordProgression();
    } else if (e.key == "ArrowLeft") {
      mainStore.moveCaret(-1);
    } else if (e.key == "ArrowRight") {
      mainStore.moveCaret(1);
    }
  });
  document.addEventListener("keypress", (e) => {
    if (mainStore.locale.keyList.includes(e.key.toUpperCase())) {
      mainStore.registerletter(e.key.toUpperCase());
    }
  });
  document.addEventListener("blur", (e) => {
    mainStore.focused = false;
  });
  document.addEventListener("focus", (e) => {
    mainStore.focused = true;
  });
  mainStore.focused = true;
}, 1000);
</script>

<template>
  <BackgroundModal v-if="mainStore.ui.isModalOpen">
    <component :is="mainStore.ui.modalCurrentView" />
  </BackgroundModal>
  <main class="app-container" :data-blur="mainStore.ui.isModalOpen">
    <StandardHeader />
    <GameBoardRenderer @click="hiddenInput.focus()" />
    <p><span>🇺🇦</span><span>Слава Україні</span></p>
  </main>
  <div class="app-hidden-elements">
    <input
      class="wordle-hidden-input"
      ref="hiddenInput"
      @input="
        (e) => {
          mainStore.registerletter(e.target.value);
          e.target.value = '';
        }
      "
    />
  </div>
  <Watermark githubLink="https://github.com/jaydensim/wordle-clone" />
</template>

<style scoped>
p {
  text-align: center;
  display: flex;
  flex-flow: column;
}

.app-container {
  transition: filter 0.3s ease;
}
.app-container[data-blur="true"] {
  filter: blur(5px);
  transition: filter 0.1s linear;
}
</style>
