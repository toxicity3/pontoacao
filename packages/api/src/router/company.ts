import slug from 'slug';
import { z } from 'zod';

import { createTRPCRouter, protectedProcedure, publicProcedure } from '../trpc';

export const companyRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({ name: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.company.create({
        data: {
          name: input.name,
          slug: slug(input.name),
        },
      });
    }),
  findById: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    // testing type validation of overridden next-auth Session in @acme/auth package
    return ctx.prisma.company.findUnique({
      where: {
        id: input,
      },
    });
  }),
});
