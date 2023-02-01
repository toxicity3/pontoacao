import { protectedProcedure, publicProcedure, createTRPCRouter } from "../trpc";
import { z } from "zod";
import slug from "slug";

export const eventRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({ name: z.string(), companyId: z.string(), score: z.number() }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.event.create({
        data: {
          name: input.name,
          companyId: input.companyId,
          slug: slug(input.name),
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
