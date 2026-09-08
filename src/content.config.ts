import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    titulo: z.string(),
    resumo: z.string(),
    categoria: z.enum(['Trabalhista', 'Previdenciário', 'Cível', 'Dúvidas frequentes']),
    data: z.coerce.date(),
    leitura: z.number().default(6),
    capa: z.string().optional(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    rascunho: z.boolean().default(false),
  }),
});

export const collections = { blog };
