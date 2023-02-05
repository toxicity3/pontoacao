import slug from 'slug';
import { z } from 'zod';

import { createTRPCRouter, publicProcedure } from '../trpc';

export const betaSubscriberRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({ email: z.string(), beta: z.boolean().default(false) }))
    .mutation(async ({ ctx, input }) => {
      console.log('to aqui no trpc');
      return await ctx.prisma.betaSubscriber.create({
        data: {
          email: input.email,
          beta: input.beta,
        },
      });
    }),
});
