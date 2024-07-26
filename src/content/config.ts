import { defineCollection, z } from 'astro:content';
const projectsCollection = defineCollection({
    type: 'content',
    schema: z.object({
      tittel: z.string(),
      sammendrag: z.string(),
      mainImage: z.string(),
      altText: z.string(),
      oppdragsgiver: z.array(z.string()),
      samarbeidspartner: z.array(z.string()),
      leveranser: z.array(z.string()),
      tidspunkt: z.string(),
      tags: z.array(z.string()),
      rekkefølge: z.number(),
    }),
  });

export const collections = {
  prosjekter: projectsCollection,
};