import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://johnpechacek.github.io",
  integrations: [react(), mdx()],
  transitions: true,
});
