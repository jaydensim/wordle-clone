import { defineStore } from "pinia";
import { useSettingsStore } from "./settings.js";
import { lang_en } from "../langs/en.js";
import { lang_uk } from "../langs/uk.js";

export const useLocaleStore = defineStore({
  id: "locale",
  state: () => ({
    langList: [lang_en, lang_uk],
    cLangName: "",
    cLangVariant: "",
    cLangStrings: {
      app: {
        title: "",
        snark: "",
        headerButtons: {
          settings: "",
        },
        settings: {
          title: "",
          section: {
            accessibility: "",
            interface: "",
          },
          setting: {
            language: {
              name: "",
              description: "",
            },
            highContrast: {
              name: "",
              description: "",
            },
          },
        },
      },
      game: {
        endscreen: {
          thewordwas: "",
          nextWordleTime: "",
          buttonLabels: {
            faliuremanagement: "",
            spamtwitter: "",
          },
          success: {
            titles: [""],
            subtitle: "",
            subtitleMarkLater: ["", "", "", "", "", ""],
            sharePromptText: [""],
          },
          almost: {
            titles: [""],
            subtitle: "",
            subtitleMarkLater: [""],
            sharePromptText: [""],
          },
          faliure: {
            titles: [""],
            subtitle: "",
            subtitleMarkLater: [""],
            sharePromptText: [""],
          },
        },
      },
    },
  }),
  actions: {
    setLanguage(langCode) {
      let langauge = langCode.split("-");
      let langaugeObject = this.langList.find(
        (obj) => obj.langISO === langauge[0].toUpperCase()
      );
      let variantObject = langaugeObject.variants.find(
        (obj) => obj.variantISO === langauge[1].toUpperCase()
      );
      this.$patch({
        cLangName: langaugeObject.langName,
        cLangVariant: variantObject.variantName,
        cLangStrings: variantObject.strings,
      });
      const settingsStore = useSettingsStore();
      settingsStore.language = langCode;
    },
    initalise() {
      const settingsStore = useSettingsStore();
      const currentLanguage = settingsStore.language;
      this.setLanguage(currentLanguage);
    },
  },
  getters: {
    getLanguageList() {
      let languages = [];
      this.langList.forEach((language) => {
        let langISO = language.langISO;
        let langName = language.langName;
        language.variants.forEach((variant) => {
          languages.push({
            name: langName + " - " + variant.variantName,
            code: langISO + "-" + variant.variantISO,
          });
        });
      });
      console.log(languages);
      return languages;
    },
  },
  persistedState: {
    persist: false,
  },
});
