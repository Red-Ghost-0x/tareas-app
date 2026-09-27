import { useEffect, useState, type Dispatch, type SetStateAction } from 'react';
import type { Todo } from '../interfaces/Todo';
import { loadTodos, saveTodos } from '../services/todoStorage';

export const useTodoStorage = (todos: Todo[], setTodos: Dispatch<SetStateAction<Todo[]>>) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    loadTodos().then((stored) => {
      setTodos(stored);
      setIsLoaded(true);
    });
  }, [setTodos]);

  useEffect(() => {
    if (isLoaded) saveTodos(todos);
  }, [todos, isLoaded]);
};
