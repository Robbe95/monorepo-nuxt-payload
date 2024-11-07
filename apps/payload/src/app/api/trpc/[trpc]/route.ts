import { createContext } from '@payload/trpc/context/auth.context';
import { appRouter } from '@payload/trpc/router/router';
import {
  fetchRequestHandler,
} from '@trpc/server/adapters/fetch';

const handler = (request: Request) => {
  return fetchRequestHandler({
    endpoint: '/api/trpc',
    req: request,
    router: appRouter,
    // @ts-ignore
    createContext: createContext,
  });
};

export { handler as GET, handler as POST };