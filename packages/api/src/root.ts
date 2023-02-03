import { authRouter } from './router/auth';
import { companyRouter } from './router/company';
import { eventRouter } from './router/event';
import { createTRPCRouter } from './trpc';

export const appRouter = createTRPCRouter({
  auth: authRouter,
  company: companyRouter,
  event: eventRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
