// hooks/useTodoStore.ts
import { useState } from "react";

type Todo = {
  id: string;
  task: string;
  completed: boolean;
};

export default function useTodoStore() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: "1", task: "Belajar React Native", completed: false },
    { id: "2", task: "Mengerjakan tugas kuliah", completed: true },
  ]);

  return { todos, setTodos };
}
