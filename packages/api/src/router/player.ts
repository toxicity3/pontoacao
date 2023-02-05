import slugify from 'slugify';
import { z } from 'zod';

import { createTRPCRouter, publicProcedure } from '../trpc';

export const playerRouter = createTRPCRouter({
  achievedEvent: publicProcedure
    .input(
      z.object({
        playerId: z.string(),
        eventId: z.string(),
        score: z.number().min(1),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.playerHasEvent.create({
        data: {
          playerId: input.playerId,
          eventId: input.eventId,
          score: input.score,
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
});
