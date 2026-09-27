import type { Todo } from '../interfaces/Todo';

const API_URL = '/api/todos';

export const fetchDbTodos = async (): Promise<Todo[] | null> => {
  try {
    const response = await fetch(API_URL);
    return response.ok ? ((await response.json()) as Todo[]) : null;
  } catch {
    return null;
  }
};

export const saveDbTodos = async (todos: Todo[]): Promise<void> => {
  try {
    await fetch(API_URL, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todos),
    });
  } catch {
    return;
  }
};
