import slugify from 'slugify';
import { z } from 'zod';

import { createTRPCRouter, publicProcedure } from '../trpc';

export const playerRouter = createTRPCRouter({
  achievedEvent: publicProcedure
    .input(z.object({ playerId: z.string(), eventId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.playerHasEvent.create({
        data: {
          playerId: input.playerId,
          eventId: input.eventId,
        },
      });
    }),
  findById: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    // testing type validation of overridden next-auth Session in @acme/auth package
    return ctx.prisma.event.findUnique({
      where: {
        id: input,
      },
    });
  }),
  getByCompanyId: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.event.findMany({
      where: {
        companyId: input,
      },
    });
  }),
  sortByScore: publicProcedure
    .input(
      z.object({
        companyId: z.string(),
        page: z.number().default(1),
        limit: z.number().default(10),
      }),
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.event.groupBy({
        by: ['playerId'],
        _sum: {
          score: true,
        },
        page: input.page,
        limit: input.limit,
        where: {
          companyId: input.companyId,
        },
      });
    }),
});
