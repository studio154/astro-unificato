import { defineConfig } from "astro/config";
import tailwindcss from '@tailwindcss/vite';
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel"; // <-- Aggiunto l'import di Vercel

export default defineConfig({
  site: "https://www.eliocarchidi.com",
  output: "static", // <-- FONDAMENTALE: mantiene il sito statico ma sblocca le API server

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
    '/conferma-invio-email-liliane-glamour/': '/foto-erotiche',
    
    // NUOVI REDIRECT PER LE PAGINE STORICHE
    '/foto-erotiche/': '/',
    '/team/elio-carchidi/': '/chi-sono/',
    
    // Pattern per intere cartelle (Sintassi corretta per Astro: accetta la destinazione come stringa)
    '/fotografi-professionisti-roma/:path*': '/portfolio',
    '/category/:path*': '/blog',
    '/bw_portrait/:path*': '/portfolio',
    '/adv_editorial/:path*': '/portfolio',
    '/fashion_beauty/:path*': '/portfolio'
  }
});