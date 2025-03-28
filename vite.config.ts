
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Define environment variables with default values
  define: {
    'import.meta.env.VITE_SUPABASE_URL': JSON.stringify(process.env.VITE_SUPABASE_URL || 'https://ypgnkbzgridhtuctonhk.supabase.co'),
    'import.meta.env.VITE_SUPABASE_ANON_KEY': JSON.stringify(process.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlwZ25rYnpncmlkaHR1Y3RvbmhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI2OTAwNTUsImV4cCI6MjA1ODI2NjA1NX0.65BhOTcEvKty0c8sSeVnQmy_tU16iPiAhJm9KIC6lC0')
  }
}));
