import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import EnvironmentPlugin from "vite-plugin-environment";

export default ({ mode }) => {
  const env = Object.assign(process.env, loadEnv(mode, process.cwd(), ""));

  return defineConfig({
    plugins: [react(), EnvironmentPlugin("all", { prefix: "VITE_" })],
    server: {
      port: 5001,
      proxy: {
        "/api": {
          target: env.VITE_ACCOUNT_SERVICE_URL || "http://localhost:5000",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  });
};
