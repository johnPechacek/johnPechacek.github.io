import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: undefined, // TODO: set real production domain (e.g. "https://johnpechacek.com")
  integrations: [react(), mdx()],
  transitions: true,
});
