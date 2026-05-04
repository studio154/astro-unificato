import { defineConfig } from "astro/config";
import tailwindcss from '@tailwindcss/vite';
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.eliocarchidi.com",

  vite: {
    plugins: [tailwindcss()],
  },

  markdown: {
    drafts: true,
    shikiConfig: {
      theme: "css-variables"
    }
  },

  shikiConfig: {
    wrap: true,
    skipInline: false
  },

  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes("/blog/tags/") &&
        !page.includes("/post-") &&
        page !== "https://www.eliocarchidi.com/team/home/" &&
        page !== "https://www.eliocarchidi.com/blog/home/" &&
        page !== "https://www.eliocarchidi.com/team/elio-carchidi/",
    }),
  ],

  redirects: {
    '/le-fotografie-glamour-di-liliane/': '/foto-erotiche',
    '/conferma-invio-email-liliane-glamour/': '/foto-erotiche'
  }
});