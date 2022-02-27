import { defineStore } from "pinia";

export const useSettingsStore = defineStore({
  id: "settings",
  state: () => ({
    language: "EN-AU",
    highContrast: false,
    offset: 0,
  }),
  actions: {},
  persistedState: {
    persist: true,
  },
});
