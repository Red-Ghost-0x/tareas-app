import type { Plugin } from 'vite';
import { todosHandler } from './todosHandler.ts';

const ROUTE = '/api/todos';

export const dbPlugin = (): Plugin => ({
  name: 'todos-db',
  configureServer: (server) => {
    server.middlewares.use(ROUTE, todosHandler);
  },
  configurePreviewServer: (server) => {
    server.middlewares.use(ROUTE, todosHandler);
  },
});
