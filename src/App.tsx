import { Header } from './components/Header';
import { TodoInput } from './components/TodoInput';
import { FilterTabs } from './components/FilterTabs';
import { TodoList } from './components/TodoList';
import { useTodos } from './hooks/useTodos';
import { useFilteredTodos } from './hooks/useFilteredTodos';

export const App = () => {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();
  const { filter, setFilter, filteredTodos } = useFilteredTodos(todos);

  return (
    <div className="mx-auto mt-10 max-w-2xl rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
      <Header />
      <TodoInput onAdd={addTodo} />
      <FilterTabs filter={filter} onChange={setFilter} />
      <TodoList todos={filteredTodos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </div>
  );
};
