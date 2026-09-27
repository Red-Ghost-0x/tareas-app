const HEADER = "import type { Todo } from '../interfaces/Todo';\n\nexport const todos: Todo[] = ";
const PATTERN = /export const todos: Todo\[\] = (\[[\s\S]*\]);/;

export const toSource = (todos: unknown[]): string => {
  const items = todos.map((todo) => `  ${JSON.stringify(todo)}`).join(',\n');
  return `${HEADER}${todos.length ? `[\n${items},\n]` : '[]'};\n`;
};

export const fromSource = (source: string): string => {
  const match = PATTERN.exec(source);
  return match ? JSON.stringify(JSON.parse(match[1].replace(/,\s*\]$/, ']'))) : '[]';
};
