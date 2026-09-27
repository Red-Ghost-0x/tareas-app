import type { FC } from 'react';
import type { Todo } from '../interfaces/Todo';
import { TodoBadge } from './TodoBadge';
import { TodoActions } from './TodoActions';

interface Props {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoItem: FC<Props> = ({ todo, onToggle, onDelete }) => {
  return (
    <li className="flex items-center justify-between border-b border-slate-100 px-2 py-3 last:border-none">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="h-4 w-4 accent-blue-600"
        />
        <span className={todo.completed ? 'text-slate-400 line-through' : 'text-slate-700'}>
          {todo.text}
        </span>
        <TodoBadge completed={todo.completed} />
      </div>
      <TodoActions onToggle={() => onToggle(todo.id)} onDelete={() => onDelete(todo.id)} />
    </li>
  );
};
