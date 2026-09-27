import { useState, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import type { Todo } from '../interfaces/Todo';
import { useTodoStorage } from './useTodoStorage';

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  useTodoStorage(todos, setTodos);

  const addTodo = useCallback((text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setTodos((prev) => [...prev, { id: uuidv4(), text: trimmed, completed: false }]);
  }, []);

  const toggleTodo = useCallback((id: string) => {
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  }, []);

  const deleteTodo = useCallback((id: string) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return { todos, addTodo, toggleTodo, deleteTodo };
};
