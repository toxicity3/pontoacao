import slugify from 'slugify';
import { z } from 'zod';

import { createTRPCRouter, publicProcedure } from '../trpc';

export const eventRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        name: z.string(),
        description: z.string().optional(),
        initialDate: z.date().optional(),
        finalDate: z.date().optional(),
        limit: z.number().optional(),
        limitPerPlayer: z.number().optional(),
        score: z.number().min(1),
        companyId: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const {
        name,
        description,
        initialDate,
        finalDate,
        limit,
        limitPerPlayer,
        score,
        companyId,
      } = input;
      return await ctx.prisma.event.create({
        data: {
          companyId,
          name,
          slug: slugify(name),
          description: description || '',
          initialDate,
          finalDate,
          limit,
          limitPerPlayer,
          score,
        },
      });
    }),
  findById: publicProcedure.input(z.string()).query(async ({ ctx, input }) => {
    // testing type validation of overridden next-auth Session in @acme/auth package
    return await ctx.prisma.event.findUnique({
      where: {
        id: input,
      },
    });
  }),
  getByCompanyId: publicProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      return await ctx.prisma.event.findMany({
        where: {
          companyId: input,
        },
      });
    }),

  getByIdAndCompanyId: publicProcedure
    .input(z.object({ id: z.string(), companyId: z.string() }))
    .query(async ({ ctx, input: { id, companyId } }) => {
      return await ctx.prisma.event.findFirst({
        where: {
          id,
          companyId,
        },
      });
    }),
});
