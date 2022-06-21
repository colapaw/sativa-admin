import { defineConfig, presetUno } from "unocss";

export default defineConfig({
    exclude: ["node_modules", ".git", "dist", "mock", "./stats.html"],
    presets: [presetUno({ dark: "class" })],
    shortcuts: {},
    theme: {},
});
