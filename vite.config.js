import { defineConfig, loadEnv } from "vite";
import preact from "@preact/preset-vite";

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  // https://vitejs.dev/config/
  return defineConfig({
    plugins: [preact()],
    server: {
      host: true,
    },
  });
};
