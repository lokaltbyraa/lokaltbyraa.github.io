import { defineCollection, z } from 'astro:content';
const projectsCollection = defineCollection({
    type: 'content',
    schema: z.object({
      tittel: z.string(),
      sammendrag: z.string(),
      mainImage: z.string(),
      altText: z.string(),
      oppdragsgivere: z.string(),
      samarbeidspartnere: z.array(z.string()),
      tidspunkt: z.string(),
      tags: z.array(z.string()),
      rekkefølge: z.number(),
    }),
  });

export const collections = {
  prosjekter: projectsCollection,
};