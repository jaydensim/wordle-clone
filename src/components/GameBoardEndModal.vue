<script setup>
import { useMainStore } from "../stores/main.js";
import { useLocaleStore } from "../stores/locale.js";

import { getNextWordleTime } from "../utils/utils.js";

import { ref } from "vue";

const mainStore = useMainStore();
const localeStore = useLocaleStore();

let geMT =
  localeStore.cLangStrings.game.endscreen[mainStore.gameStatus.result].titles[
    Math.floor(
      Math.random() *
        localeStore.cLangStrings.game.endscreen[mainStore.gameStatus.result]
          .titles.length
    )
  ];

let geMU =
  localeStore.cLangStrings.game.endscreen[mainStore.gameStatus.result]
    .subtitle +
  " " +
  localeStore.cLangStrings.game.endscreen[mainStore.gameStatus.result]
    .subtitleMarkLater[mainStore.gameTickerIncrement - 1];

let geMS =
  localeStore.cLangStrings.game.endscreen[mainStore.gameStatus.result]
    .sharePromptText[
    Math.floor(
      Math.random() *
        localeStore.cLangStrings.game.endscreen[mainStore.gameStatus.result]
          .sharePromptText.length
    )
  ];

let timer = null;
let currentTimeDown = ref("00:00:00");

const vTimerCountdown = {
  mounted: () => {
    console.log("mounted");
    timer = setInterval(() => {
      let dateObj = getNextWordleTime();
      currentTimeDown.value =
        String(dateObj.getHours()).padStart(2, "0") +
        ":" +
        String(dateObj.getMinutes()).padStart(2, "0") +
        ":" +
        String(dateObj.getSeconds()).padStart(2, "0");
    }, 500);
  },
  beforeUnmount: () => {
    console.log("cleared");
    clearInterval(timer);
  },
};
</script>

<template>
  <section class="GameBoardEndModal">
    <h1>{{ geMT }}</h1>
    <p>
      {{ geMU }}
    </p>
    <img
      src="../assets/you-gassed-it.gif"
      v-if="mainStore.gameStatus.result == 'success'"
    />
    <img
      src="../assets/welcome-faliure.gif"
      v-if="mainStore.gameStatus.result == 'almost'"
    />
    <img
      src="../assets/faliure.gif"
      v-if="mainStore.gameStatus.result == 'faliure'"
    />
    <section class="outer">
      <h3>{{ geMS }}</h3>

      <section class="wordleTileSelector">
        <p>{{ mainStore.currentBoardGeneratedEmojiTile }}</p>
        <a
          class="twitter-share-button"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
        >
          {{ localeStore.cLangStrings.game.endscreen.buttonLabels.spamtwitter }}
        </a>
        <br />
        <a
          href="https://app.defencejobs.gov.au/olat"
          v-if="mainStore.gameStatus.result !== 'success'"
          target="_blank"
        >
          {{
            localeStore.cLangStrings.game.endscreen.buttonLabels
              .faliuremanagement
          }}
        </a>
      </section>
    </section>
    <section class="outer" style="display: block">
      <h3>{{ localeStore.cLangStrings.game.endscreen.nextWordleTime }}</h3>

      <section>
        <p v-timer-countdown class="timer">{{ currentTimeDown }}</p>
      </section>
    </section>
  </section>
</template>

<style scoped>
section.GameBoardEndModal {
  text-align: center;
}
h1 {
  font-size: 3rem;
  font-variation-settings: "wght" 800;
  line-height: 2em;
}
h3 {
  font-size: 0.8rem;
  font-variation-settings: "wght" 700;
  text-transform: uppercase;
  letter-spacing: 0.2em;
}
section.outer {
  margin-top: 4rem;
}

.wordleTileSelector p {
  white-space: pre;
  user-select: all;
  margin: 0.5rem auto 1rem auto;
}

.timer {
  margin: 1rem auto 1rem auto;
  font-variant-numeric: tabular-nums;
  font-size: 2rem;
  text-transform: uppercase;
}

img {
  width: 300px;
  max-width: calc(100% - 50px);
  margin: 1rem auto 0px auto;
}
</style>
