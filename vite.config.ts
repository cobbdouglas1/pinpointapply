import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Removed: import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // Removed: componentTagger()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
