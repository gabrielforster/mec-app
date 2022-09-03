// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { exampleRouter } from "./example";
import { itemsRouter } from "./items";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("example.", exampleRouter)
  .merge("items.", itemsRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
