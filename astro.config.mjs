import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: "https://www.eliocarchidi.com",
  output: "static",
  trailingSlash: "never",

  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),

  vite: {
    plugins: [tailwindcss()],
  },

  markdown: {
    drafts: true,
    shikiConfig: {
      theme: "css-variables",
    },
  },

  shikiConfig: {
    wrap: true,
    skipInline: false,
  },

  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes("/blog/tags/") &&
        !page.includes("/blog/posts/") &&
        !page.includes("/post-") &&
        !page.includes("/grazie") &&
        !page.includes("/conferma") &&
        !page.includes("/conferma-email") &&
        !page.includes("/download") &&
        !page.includes("/pagina-di-download") &&
        !page.includes("/pagina-download") &&
        !page.includes("/prenotazione-ricevuta") &&
        !page.includes("/prezzi-riservati") &&
        page !== "https://www.eliocarchidi.com/team/home/" &&
        page !== "https://www.eliocarchidi.com/blog/home/" &&
        page !== "https://www.eliocarchidi.com/team/elio-carchidi/" &&
        page !== "https://www.eliocarchidi.com/book-fotografico-ritratto-download/" &&
        page !== "https://www.eliocarchidi.com/libro-fotografico-ritratti-elio-l-carchidi-conferma-email/" &&
        page !== "https://www.eliocarchidi.com/libro-fotografico-ritratti-elio-l-carchidi-download/" &&
        page !== "https://www.eliocarchidi.com/prezzi-servizi-conferma-email/" &&
        page !== "https://www.eliocarchidi.com/book-fotografico-ritratto-download" &&
        page !== "https://www.eliocarchidi.com/libro-fotografico-ritratti-elio-l-carchidi-conferma-email" &&
        page !== "https://www.eliocarchidi.com/libro-fotografico-ritratti-elio-l-carchidi-download" &&
        page !== "https://www.eliocarchidi.com/prezzi-servizi-conferma-email",
    }),
  ],

  redirects: {
    "/blog/home/": "/blog/",
    "/le-fotografie-glamour-di-liliane/": "/foto-erotiche/",
    "/conferma-invio-email-liliane-glamour/": "/foto-erotiche/",
    "/team/elio-carchidi/": "/chi-sono/",
    "/formazione-fotografica/fotografia-in-bianco-e-nero-pdf-con-download-immediato-2020/":
      "https://payhip.com/b/mHvtT",
    "/formazione-fotografica/corsi-di-fotografia-roma-gratis":
      "/formazione-fotografica/",
    "/formazione-fotografica/la-fotografia-per-i-bambini/":
      "/il-manuale-della-fotografia-per-i-bambini/",
    "/fotografia-professionale/":
      "/in-cosa-si-distingue-un-fotoamatore-o-fotografo-dilettante-da-un-fotografo-professionista/",
  },
});
