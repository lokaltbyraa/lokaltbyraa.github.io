
import { defineCollection, reference } from 'astro:content';
import { z } from 'astro/zod';
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

const ansatte = defineCollection({
  loader: file("src/content/ansatte/ansatte.json"),
  schema: z.object({
    navn: z.string(),
    stilling: z.string(),
    epost: z.string().email(),
    telefon: z.string(),
    rekkefølge: z.number(),
    headshot: z.string(),
    altText: z.string(),
    bio: z.string(),
    utdanning: z.array(z.string()),
    tidligereErfaring: z.array(z.string()),
  }),
});

const prosjektarkiv = defineCollection({
  loader: file("src/content/prosjektarkiv/prosjektarkiv.json"),
  schema: z.object({
    prosjektnavn: z.string(),
    oppdragsgiver: z.array(z.string()),
    samarbeidspartner: z.array(z.string()),
    årstall: z.number(),
    tema: z.array(z.string()),
    link: z.string(),
  }),
});

const foredrag = defineCollection({
  loader: file("src/content/foredrag/foredrag.json"),
  schema: z.object({
    tittel: z.string(),
    kunde: z.array(z.string()),
    avdeling: z.array(z.string()),
    bestilling: z.string(),
    år: z.number(),
  }),
});


export const collections = {
  'prosjekter': projectsCollection,
  'ansatte': ansatte,
  'prosjektarkiv': prosjektarkiv,
  'foredrag': foredrag,
};