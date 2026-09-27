import { browser } from './browserStorage';
import { fetchDbTodos, saveDbTodos } from './dbApi';
import type { Todo } from '../interfaces/Todo';

const STORAGE_KEY = 'todos';

export const loadTodos = async (): Promise<Todo[]> => {
  const dbTodos = await fetchDbTodos();
  if (dbTodos?.length) return dbTodos;
  const result = await browser.storage.local.get(STORAGE_KEY);
  const stored = result[STORAGE_KEY];
  return Array.isArray(stored) ? (stored as Todo[]) : [];
};

export const saveTodos = async (todos: Todo[]): Promise<void> => {
  await browser.storage.local.set({ [STORAGE_KEY]: todos });
  await saveDbTodos(todos);
};
