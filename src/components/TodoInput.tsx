import { useState, type FC, type KeyboardEvent } from 'react';

interface Props { onAdd: (text: string) => void }

export const TodoInput: FC<Props> = ({ onAdd }) => {
  const [text, setText] = useState('');
  const handleAddClick = () => {
    onAdd(text);
    setText('');
  };
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleAddClick();
  };
  return (
    <div className="mb-4 flex gap-3">
      <input
        type="text"
        placeholder="Nueva tarea..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 rounded-xl border border-slate-200 px-4 py-2 text-slate-600 outline-none focus:border-blue-400"
      />
      <button onClick={handleAddClick} className="rounded-xl bg-blue-600 px-6 py-2 font-medium text-white hover:bg-blue-700">
        Agregar
      </button>
    </div>
  );
};
