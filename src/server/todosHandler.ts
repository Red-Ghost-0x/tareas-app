import type { IncomingMessage, ServerResponse } from 'node:http';
import { readTodos, writeTodos } from './todosFile.ts';

const readBody = (req: IncomingMessage) =>
  new Promise<string>((resolve) => {
    let data = '';
    req.on('data', (chunk: Buffer) => (data += chunk));
    req.on('end', () => resolve(data));
  });

export const todosHandler = async (req: IncomingMessage, res: ServerResponse) => {
  res.setHeader('Content-Type', 'application/json');
  if (req.method !== 'PUT') {
    res.end(readTodos());
    return;
  }
  try {
    const todos = JSON.parse(await readBody(req));
    if (!Array.isArray(todos)) throw new Error('Formato inválido');
    writeTodos(todos);
    res.end('{"ok":true}');
  } catch {
    res.statusCode = 400;
    res.end('{"ok":false}');
  }
};
