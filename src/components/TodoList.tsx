import type { FC } from 'react';
import type { Todo } from '../interfaces/Todo';
import { TodoItem } from './TodoItem';

interface Props {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoList: FC<Props> = ({ todos, onToggle, onDelete }) => {
  return (
    <ul className="rounded-2xl border border-slate-100 px-2">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  );
};
