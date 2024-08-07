
import { defineCollection, z, reference } from 'astro:content';

// const projectsCollection = defineCollection({
//     type: 'content',
//     schema: z.object({
//       tittel: z.string(),
//       sammendrag: z.string(),
//       mainImage: z.string(),
//       altText: z.string(),
//       oppdragsgiver: z.array(z.string()),
//       samarbeidspartner: z.array(z.string()),
//       leveranser: z.array(z.string()),
//       tidspunkt: z.string(),
//       tags: z.array(z.string()),
//       rekkefølge: z.number(),
//       vårkontaktperson: z.array(reference("projectsCollection")),
//     }),
//   });

// export const collections = {
//   prosjekter: projectsCollection,
// };


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
    vårKontaktperson: reference('ansatte'),
  })
});

const ansatte = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      navn: z.string(),
      stilling: z.string(),
      epost: z.string(),
      telefon: z.number(),
      rekkefølge: z.number(),

      headshot: z.object({
      src: image(),
      altText: z.string(),
      }),
})
});

export const collections = {
  'prosjekter': projectsCollection,
  'ansatte': ansatte,
};