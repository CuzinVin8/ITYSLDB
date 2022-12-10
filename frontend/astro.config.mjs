import { defineConfig } from 'astro/config';

// Enable React to support React JSX components.
import react from '@astrojs/react';

// https://astro.build/config
import sanity from "astro-sanity";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [sanity({
    projectId: '7lpknm4h',
    dataset: 'production',
    apiVersion: '2021-03-25',
    useCdn: true
  }), tailwind(), react()]
});