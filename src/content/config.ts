import { defineCollection, z } from "astro:content";

// --- SCHEMA EDIZIONI AGGIORNATO ---
const edizioni = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      price: z.string(),
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
      price: z.string(),
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

const team = defineCollection({
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      role: z.string().optional(),
      bio: z.string().optional(),
      image: z.object({
        url: image(),
        alt: z.string(),
      }),
      socials: z
        .object({
          twitter: z.string().optional(),
          website: z.string().optional(),
          linkedin: z.string().optional(),
          email: z.string().optional(),
        })
        .optional(),
    }),
});

const store = defineCollection({
  schema: ({ image }) =>
    z.object({
      price: z.string(),
      title: z.string(),
      checkout: z.string().optional(),
      checkout2: z.string().optional(),
      license: z.string().optional(),
      highlights: z.array(z.string()).default([]),
      specifications: z
        .array(
          z.object({
            name: z.string(),
            value: z.string(),
          })
        )
        .optional(),
      description: z.string(),
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

const servizi = defineCollection({
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      role: z.string().optional(),
      bio: z.string().optional(),
      image: z.object({
        url: image(),
        alt: z.string(),
      }),
      socials: z
        .object({
          twitter: z.string().optional(),
          website: z.string().optional(),
          linkedin: z.string().optional(),
          email: z.string().optional(),
        })
        .optional(),
    }),
});

export const collections = {
  team,
  store,
  gallery,
  infopages,
  posts: postsCollection,
  edizioni,
  sessioni,
  portfolio,
  servizi,
};