// electron.vite.config.ts
import { resolve } from "path";
import { defineConfig, externalizeDepsPlugin } from "electron-vite";
import react from "@vitejs/plugin-react";
var __electron_vite_injected_dirname = "C:\\Users\\natae\\WebstormProjects\\MLBBTS\\mlts";
var electron_vite_config_default = defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        "@renderer": resolve(__electron_vite_injected_dirname, "src/renderer/src")
      }
    },
    plugins: [react()],
    server: {
      headers: {
        "Content-Security-Policy": "default-src 'self'; img-src 'self' data:;"
      }
    }
  }
});
export {
  electron_vite_config_default as default
};
