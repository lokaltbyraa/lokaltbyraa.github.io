
import { defineCollection, z, reference } from 'astro:content';
import { file, glob } from 'astro/loaders';

const projectsCollection = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/prosjekter" }),
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
    // kontaktperson: z.string(),
    kontaktperson: reference("ansatte").optional(),
    utkast: z.boolean().optional(),
  })
});

// const ansatte = defineCollection({
//     loader: glob({ pattern: '**/[^_]*.{yaml}', base: "./src/content/ansatte" }),
//   schema: ({ image }) =>
//     z.object({
//       navn: z.string(),
//       stilling: z.string(),
//       epost: z.string(),
//       telefon: z.number(),
//       rekkefølge: z.number(),

//       headshot: z.object({
//       src: image(),
//       altText: z.string(),
//       }),
// })
// });

const ansatte = defineCollection({
  loader: file("src/content/ansatte/ansatte.json"),
  schema: ({ image }) =>
    z.object({
      navn: z.string(),
      stilling: z.string(),
      epost: z.string(),
      telefon: z.number(),
      rekkefølge: z.number(),
      headshot: image(),
      altText: z.string(),
    }),
});


export const collections = {
  'prosjekter': projectsCollection,
  'ansatte': ansatte,
};