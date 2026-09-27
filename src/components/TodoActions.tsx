import type { FC } from 'react';
import { Check, Trash2 } from 'lucide-react';

interface Props {
  onToggle: () => void;
  onDelete: () => void;
}

export const TodoActions: FC<Props> = ({ onToggle, onDelete }) => {
  return (
    <div className="flex gap-2">
      <button
        onClick={onToggle}
        className="rounded-lg border border-emerald-200 p-2 text-emerald-600 hover:bg-emerald-50"
      >
        <Check size={16} />
      </button>
      <button
        onClick={onDelete}
        className="rounded-lg border border-rose-200 p-2 text-rose-600 hover:bg-rose-50"
      >
        <Trash2 size={16} />
      </button>
    </div>
  );
};
