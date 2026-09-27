import type { FC } from 'react';
import type { FilterType } from '../interfaces/Filter';

interface Props {
  filter: FilterType;
  onChange: (filter: FilterType) => void;
}
const OPTIONS: { value: FilterType; label: string }[] = [
  { value: 'all', label: 'Todas' },
  { value: 'pending', label: 'Pendientes' },
  { value: 'completed', label: 'Completadas' },
];

export const FilterTabs: FC<Props> = ({ filter, onChange }) => {
  return (
    <div className="mb-4 flex gap-2">
      {OPTIONS.map((option) => (
        <button
          key={option.value}
          onClick={() => onChange(option.value)}
          className={`rounded-full px-4 py-1.5 text-sm font-medium ${
            filter === option.value ? 'bg-blue-600 text-white' : 'border border-slate-200 text-slate-600'
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};
