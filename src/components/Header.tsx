import { CheckCheck } from 'lucide-react';

export const Header = () => {
  return (
    <div className="mb-6 flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
        <CheckCheck size={20} />
      </div>
      <h1 className="text-xl font-bold text-slate-800">Mi Lista de Tareas</h1>
    </div>
  );
};
