import { defineCollection, z } from 'astro:content';

export const collections = {
	work: defineCollection({
		schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
						 img: z.string().refine(value => value.startsWith('https://'), {
        message: 'Debe ser una URL válida que comience con "https://"',
      }),
	  	  			// img: z.string(),
			
			img_alt: z.string().optional(),
		}),
	}),
};
