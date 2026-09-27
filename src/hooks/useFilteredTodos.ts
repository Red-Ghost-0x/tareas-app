import { useMemo, useState } from 'react';
import type { Todo } from '../interfaces/Todo';
import type { FilterType } from '../interfaces/Filter';

export const useFilteredTodos = (todos: Todo[]) => {
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredTodos = useMemo(() => {
    if (filter === 'pending') return todos.filter((todo) => !todo.completed);
    if (filter === 'completed') return todos.filter((todo) => todo.completed);
    return todos;
  }, [todos, filter]);

  return { filter, setFilter, filteredTodos };
};
