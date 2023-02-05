import { companyRouter } from './router/company';
import { eventRouter } from './router/event';
import { playerRouter } from './router/player';
import { createTRPCRouter } from './trpc';

export const appRouter = createTRPCRouter({
  company: companyRouter,
  event: eventRouter,
  player: playerRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
