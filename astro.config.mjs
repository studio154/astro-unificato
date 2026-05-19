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
    
    // -------------------------------------------------------------------------
    // REDIRECT BLINDATI PER LE VECCHIE GALLERIE/PAGINE DA SEARCH CONSOLE
    // -------------------------------------------------------------------------
    // 1. Galleria Dermatologia e Medicina Estetica
    '/fotografi-professionisti-roma/galleria-fotografica-dermatologia-e-medicina-estetica': '/portfolio',
    '/fotografi-professionisti-roma/galleria-fotografica-dermatologia-e-medicina-estetica/': '/portfolio',

    // 2. Foto Artistiche Bianco e Nero / Fine Art
    '/fotografi-professionisti-roma/foto-artistiche-bianco-nero-colore-ricerca-personale-fine-art': '/portfolio',
    '/fotografi-professionisti-roma/foto-artistiche-bianco-nero-colore-ricerca-personale-fine-art/': '/portfolio',

    // 3. Foto Cani Meticci
    '/fotografi-professionisti-roma/foto-cani-meticci': '/portfolio',
    '/fotografi-professionisti-roma/foto-cani-meticci/': '/portfolio',

    // 4. Fotografie Professionali per Musicisti
    '/fotografi-professionisti-roma/fotografie-professionali-per-musicisti-cantanti-e-gruppi-musicali': '/portfolio',
    '/fotografi-professionisti-roma/fotografie-professionali-per-musicisti-cantanti-e-gruppi-musicali/': '/portfolio',

    // 5. Ritratti Corporate
    '/fotografi-professionisti-roma/ritratti-corporate': '/portfolio',
    '/fotografi-professionisti-roma/ritratti-corporate/': '/portfolio',

    // 6. Vecchia Categoria Galleria Fotografica
    '/category/galleria-fotografica': '/blog',
    '/category/galleria-fotografica/': '/blog',
    
    // -------------------------------------------------------------------------
    // PATTERN GENERICI DI BACKUP (Se un URL non è tra quelli sopra, scatta questo)
    // -------------------------------------------------------------------------
    '/fotografi-professionisti-roma': '/portfolio',
    '/fotografi-professionisti-roma/:path*': '/portfolio',

    '/category': '/blog',
    '/category/:path*': '/blog',

    '/bw_portrait': '/portfolio',
    '/bw_portrait/:path*': '/portfolio',

    '/adv_editorial': '/portfolio',
    '/adv_editorial/:path*': '/portfolio',

    '/fashion_beauty': '/portfolio',
    '/fashion_beauty/:path*': '/portfolio'
  }
});