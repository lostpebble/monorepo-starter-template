import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  server: {
    warmup: {
      clientFiles: [
        "./app/**/!(*.server|*.test)*.tsx", // Include all .tsx files except server and test files (add more patterns if required)
        // "./app/entry.client.tsx",
      ],
    },
  },
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  define: {
    global: "globalThis",
  },
});
