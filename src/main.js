import { createApp } from "vue";
import { createPinia } from "pinia";
import { createPersistedStatePlugin } from "pinia-plugin-persistedstate-2";
import App from "./App.vue";
import "@fontsource/manrope/variable.css";
import "./assets/base.css";

const app = createApp(App);

const pinia = createPinia();
pinia.use(createPersistedStatePlugin({ persist: true }));
app.use(pinia);

app.mount("#app");
