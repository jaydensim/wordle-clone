<script setup>
import { useMainStore } from "../stores/main.js";
import { useLocaleStore } from "../stores/locale.js";

import SettingsConfigModal from "./SettingsConfigModal.vue";

const mainStore = useMainStore();
const localeStore = useLocaleStore();
</script>

<template>
  <header class="main-header">
    <section>
      <h1>{{ localeStore.cLangStrings.app.title }}</h1>
      <p class="snark">
        {{ localeStore.cLangStrings.app.snark }}
      </p>
    </section>
    <section class="right">
      <button
        @click="
          () => {
            mainStore.ui.isModalOpen = true;
            mainStore.ui.modalCurrentView = SettingsConfigModal;
          }
        "
      >
        {{ localeStore.cLangStrings.app.headerButtons.settings }}
      </button>
    </section>
  </header>
</template>

<style scoped>
h1 {
  font-variation-settings: "wght" 800;
}

header {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
}
section {
  display: flex;
  flex-flow: column;
}
section.right {
  text-align: end;
}
</style>
