<script setup>
import { useLocaleStore } from "../stores/locale.js";
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
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
        {{ localeStore.cLangStrings.app.headerButtons.settings }}
      </a>
      <a href="https://app.defencejobs.gov.au/olat" target="_blank">
        {{ localeStore.cLangStrings.app.headerButtons.shareGame }}
      </a>
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
