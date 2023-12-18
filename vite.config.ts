import { defineConfig } from "vite";
import styleXVitePlugin from "vite-plugin-stylex";

export default defineConfig({
  ssr: {
    external: ["@stylexjs/stylex"],
  },
  plugins: [styleXVitePlugin()],
});
