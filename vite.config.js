import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import EnvironmentPlugin from "vite-plugin-environment";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    EnvironmentPlugin({
      VERCEL_ENV: "local/unspecified",
      VERCEL_GIT_COMMIT_SHA: "",
      VERCEL_GIT_COMMIT_REF: "unknown-branch",
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
