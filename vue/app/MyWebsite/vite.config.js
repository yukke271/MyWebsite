// utilities
import { defineConfig } from "vite";
import { fileURLToPath, URL } from "url";

// plugins
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
    ],
  },
  // ホストからアクセスできるように設定する
  // WSL2上の開発環境でホットリロードが効くようにする
  server: {
    host: true,
    watch: {
      usePolling: true,
    },
  },
});
