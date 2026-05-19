import { defineConfig } from "astro/config";
import tailwindcss from '@tailwindcss/vite';
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: "https://www.eliocarchidi.com",
  output: "static", 

  // MODIFICATO: Diciamo a Vercel di intercettare e gestire i redirect a livello server
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    imagesConfig: {
      sizes: [320, 640, 1200, 2048],
      domains: [],
    },
    // Questa è la chiave: forza Vercel a leggere l'oggetto redirects di Astro
    routing: {
      redirects: true
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
    '/le-fotografie-glamour-di-liliane/': '/foto-erotiche',
    '/conferma-invio-email-liliane-glamour/': '/foto-erotiche',
    
    // NUOVI REDIRECT PER LE PAGINE STORICHE
    '/foto-erotiche/': '/',
    '/team/elio-carchidi/': '/chi-sono/',
    
    // Pattern per intere cartelle (Ora Vercel le gestirà da server con lo status 302 automatico)
    '/fotografi-professionisti-roma/:path*': '/portfolio',
    '/category/:path*': '/blog',
    '/bw_portrait/:path*': '/portfolio',
    '/adv_editorial/:path*': '/portfolio',
    '/fashion_beauty/:path*': '/portfolio'
  }
});