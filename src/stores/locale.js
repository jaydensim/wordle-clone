import { defineStore } from "pinia";
import { lang_en } from "../langs/en.js";

export const useLocaleStore = defineStore({
  id: "locale",
  state: () => ({
    cLangName: "",
    cLangVariant: "",
    cLangStrings: {
      app: {
        title: "",
        snark: "",
        headerButtons: {
          settings: "",
          shareGame: "",
        },
      },
      game: {
        endscreen: {
          nextWordleTime: "",
          buttonLabels: {
            faliuremanagement: "",
            spamtwitter: "",
          },
          success: {
            titles: [""],
            subtitle: "",
            subtitleMarkLater: [""],
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
    langList: [lang_en],
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
    },
    initalise() {
      const currentLanguage = localStorage.getItem("language") || "en-au";
      this.setLanguage(currentLanguage);
    },
  },
});
