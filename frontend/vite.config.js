import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({
      globals: {
        crypto: true,
      },
    }),
  ],
  server: {
    host: '0.0.0.0',
    port: 3000,
    hmr: {
      // Use 'ws' protocol explicitly
      protocol: 'ws',
      // Use the public-facing host instead of 0.0.0.0
      host: 'localhost',
      clientPort: 3000,
      // Fallback options to make HMR work in Docker
      path: '/hmr/',
      timeout: 5000,
    },
    watch: {
      usePolling: true,
      interval: 1000,
    },
    proxy: {
      "/api": {
        target: "http://backend:8000",
        changeOrigin: true, 
        secure: false,
      },
    },
    cors: true,
  },
});