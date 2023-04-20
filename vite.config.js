import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://zhuanlan.zhihu.com/p/421460116
// https://vitejs.dev/config/
export default defineConfig({
  base: path.resolve(__dirname, "./dist/"),
  // base: path.resolve(__dirname, "./"),
  plugins: [vue()],
});
