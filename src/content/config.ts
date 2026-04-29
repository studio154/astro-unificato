import { defineCollection, z } from "astro:content";

// --- SCHEMA EDIZIONI AGGIORNATO ---
const edizioni = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      price: z.number(),
      priceLabel: z.string().optional(),  
      checkout: z.string().optional(),
      checkout2: z.string().optional(),
      description: z.string(),
      // Aggiungiamo i campi mancanti qui:
      license: z.string().optional(), 
      specifications: z
        .array(
          z.object({
            name: z.string(),
            value: z.string(),
          })
        )
        .optional(),
      highlights: z.array(z.string()).default([]),
      image: z.object({
        url: image(),
        alt: z.string(),
      }),
      images: z.array(
        z.object({
          url: image(),
          alt: z.string(),
        })
      ).optional(),
      faq: z
        .array(
          z.object({
            question: z.string(),
            answer: z.string(),
          })
        )
        .optional(),
    }),
});

// Collezione per sessioni private
// 2. SESSIONI PRIVATE
const sessioni = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      price: z.number(),
      priceLabel: z.string().optional(), 
      checkout: z.string().optional(),
      checkout2: z.string().optional(),
      description: z.string(),
      license: z.string().optional(), // Aggiunto qui
      specifications: z.array(z.object({ name: z.string(), value: z.string() })).optional(), // Aggiunto qui
      image: z.object({ url: image(), alt: z.string() }),
      highlights: z.array(z.string()).optional(),
      faq: z
        .array(
          z.object({
            question: z.string(),
            answer: z.string(),
          })
        )
        .optional(),
    }),
});

const gallery = defineCollection({
  schema: ({ image }) =>
    z.object({
      order: z.number(),
      category: z.string(),
      bgColor: z.string().optional(),
      textColor: z.string().optional(),
      title: z.string(),
      description: z.string(),
      thumbnail: z.object({
        url: z.string(),
        alt: z.string(),
        title: z.string().optional(),
      }),
      thumbnailClass: z.string().optional(),
      imageGrid: z.string().optional(),
      images: z
  .array(
    z.object({
      url: z.string(),
      alt: z.string(),
      title: z.string().optional(),
      class: z.string().optional(),
    })
  )
  .optional(),
    }),
});

const portfolio = defineCollection({
  schema: ({ image }) =>
    z.object({
      order: z.number(),
      category: z.string(),
      bgColor: z.string().optional(),
      textColor: z.string().optional(),
      title: z.string(),
      description: z.string(),
      thumbnail: z.object({
        url: z.string(),
        alt: z.string(),
        title: z.string().optional(),
      }),
      thumbnailClass: z.string().optional(),
      imageGrid: z.string().optional(),
      images: z
  .array(
    z.object({
      url: z.string(),
      alt: z.string(),
      title: z.string().optional(),
      class: z.string().optional(),
    })
  )
  .optional(),
    }),
});

const postsCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      team: z.string(),
      image: z.object({
        url: z.string().optional(),
        alt: z.string().optional(),
      }).optional(),
      tags: z.array(z.string()),
    }),
});

const infopages = defineCollection({
  schema: z.object({
    page: z.string(),
    pubDate: z.date(),
  }),
});

// --- SCHEMA PAGINE (EX WORDPRESS) ---
const pagine = defineCollection({
  type: 'content', // Importante per gestire il corpo del testo Markdown
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string().optional(), // URL immagine (stringa perché spesso viene da WP)
    pubDate: z.date().optional(),
    pageStyle: z.enum(["standard", "landing", "wide", "legacy"]).optional(),
  }),
});

export const collections = {
  gallery,
  infopages,
  posts: postsCollection,
  edizioni,
  sessioni,
  portfolio,
  pagine, // <--- Aggiunta qui
};