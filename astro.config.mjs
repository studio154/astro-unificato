import { defineConfig } from "astro/config";
import tailwindcss from '@tailwindcss/vite';
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: "https://www.eliocarchidi.com",
  output: "static",
  trailingSlash: "ignore",

  adapter: vercel({
    webAnalytics: {
      enabled: true,
    }
  }),

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

  '/le-fotografie-glamour-di-liliane/': '/foto-erotiche/',
  '/conferma-invio-email-liliane-glamour/': '/foto-erotiche/',
  '/foto-erotiche/': '/',
  '/team/elio-carchidi/': '/chi-sono/',
  '/formazione-fotografica/fotografia-in-bianco-e-nero-pdf-con-download-immediato-2020/': 'https://payhip.com/b/mHvtT',
  '/formazione-fotografica/corsi-di-fotografia-roma-gratis': '/formazione-fotografica/',
  '/formazione-fotografica/la-fotografia-per-i-bambini/': '/il-manuale-della-fotografia-per-i-bambini/',
  '/fotografia-professionale/': '/in-cosa-si-distingue-un-fotoamatore-o-fotografo-dilettante-da-un-fotografo-professionista/',
}
});