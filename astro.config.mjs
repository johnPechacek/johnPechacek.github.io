import { defineConfig } from "astro/config";
import react from "@astrojs/react";

export default defineConfig({
  site: undefined,
  integrations: [react()],
  transitions: true,
});
