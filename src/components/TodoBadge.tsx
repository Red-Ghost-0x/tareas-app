import type { FC } from 'react';

interface Props {
  completed: boolean;
}

export const TodoBadge: FC<Props> = ({ completed }) => {
  return (
    <span
      className={`rounded-full px-2 py-0.5 text-xs font-medium ${
        completed ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-500'
      }`}
    >
      {completed ? 'Completada' : 'Pendiente'}
    </span>
  );
};
