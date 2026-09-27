import { existsSync, mkdirSync, readFileSync, renameSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { fromSource, toSource } from './todosFormat.ts';

const DB_DIR = fileURLToPath(new URL('../db', import.meta.url));
const DB_FILE = resolve(DB_DIR, 'todos.ts');
const TMP_FILE = resolve(DB_DIR, 'todos.ts.tmp');

export const readTodos = (): string => {
  return existsSync(DB_FILE) ? fromSource(readFileSync(DB_FILE, 'utf-8')) : '[]';
};

export const writeTodos = (todos: unknown[]): void => {
  mkdirSync(DB_DIR, { recursive: true });
  writeFileSync(TMP_FILE, toSource(todos));
  renameSync(TMP_FILE, DB_FILE);
};
