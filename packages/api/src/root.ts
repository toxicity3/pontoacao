import { authRouter } from './router/auth';
import { companyRouter } from './router/company';
import { postRouter } from './router/post';
import { createTRPCRouter } from './trpc';

export const appRouter = createTRPCRouter({
  post: postRouter,
  auth: authRouter,
  company: companyRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
