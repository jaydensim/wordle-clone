<script setup>
import { useLocaleStore } from "../stores/locale.js";
import { useSettingsStore } from "../stores/settings.js";
import { useMainStore } from "../stores/main.js";
const localeStore = useLocaleStore();
const settingsStore = useSettingsStore();
const mainStore = useMainStore();
</script>

<template>
  <section class="settings">
    <div class="header">
      <h1>{{ localeStore.cLangStrings.app.settings.title }}</h1>
      <button
        @click="
          () => {
            mainStore.ui.isModalOpen = false;
            mainStore.ui.modalCurrentView = null;
          }
        "
      >
        X
      </button>
    </div>
    <fieldset class="outer">
      <legend>
        {{ localeStore.cLangStrings.app.settings.section.interface }}
      </legend>
      <fieldset>
        <legend>
          {{ localeStore.cLangStrings.app.settings.setting.language.name }}
        </legend>
        <label>
          {{
            localeStore.cLangStrings.app.settings.setting.language.description
          }}
        </label>
        <select
          v-model="settingsStore.language"
          @change="(event) => localeStore.setLanguage(settingsStore.language)"
        >
          <option
            v-for="language in localeStore.getLanguageList"
            :value="language.code"
          >
            {{ language.name }}
          </option>
        </select>
      </fieldset>
    </fieldset>
    <fieldset class="outer">
      <legend>
        {{ localeStore.cLangStrings.app.settings.section.accessibility }}
      </legend>
      <fieldset>
        <legend>
          {{ localeStore.cLangStrings.app.settings.setting.highContrast.name }}
        </legend>
        <div>
          <input
            type="checkbox"
            id="wordle-setting-highContrast"
            v-model="settingsStore.highContrast"
          />
          <label for="wordle-setting-highContrast">
            {{
              localeStore.cLangStrings.app.settings.setting.highContrast
                .description
            }}
          </label>
        </div>
      </fieldset>
    </fieldset>
  </section>
</template>

<style scoped>
section.GameBoardEndModal {
  text-align: center;
}
h1 {
  font-size: 1.5rem;
  font-variation-settings: "wght" 800;
  line-height: 2em;
  margin-bottom: 0.5rem;
}
fieldset.outer > legend {
  width: 100%;
  font-variation-settings: "wght" 900;
  border-bottom: 1px solid #000000;
  margin-bottom: 0.5rem;
  margin-top: 1.5rem;
}
fieldset:not(.outer) legend {
  font-size: 0.8rem;
  font-variation-settings: "wght" 700;
  text-transform: uppercase;
  letter-spacing: 0.2em;
}
fieldset:not(.outer) {
  display: flex;
  flex-flow: column;
}

fieldset {
  margin: 0px;
  outline: 0px;
  border: 0px;
  padding: 0px;
}
fieldset > div {
  display: flex;
  flex-flow: row;
}

input[type="checkbox"] {
  margin-right: 20px;
  position: relative;
}
.header {
  display: flex;
  justify-content: space-between;
}

button {
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
}
</style>
