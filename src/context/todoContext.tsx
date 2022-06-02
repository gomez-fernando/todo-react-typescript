import React, { createContext, ReactNode, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export type Todo = {text: string; completed: boolean};

export type TodoContextInterface = {
  createTodoValue: string;
  setTodoValue: React.Dispatch<React.SetStateAction<string>>;
  addTodo: () => void;
  completedTodods: number;
  totalTodos: number;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  toogleFilterComplete: () => void;
  filterComplete: boolean;
  todosFiltered: Todo[];
  completeTodos: (text: string) => void;
  deleteTodos: () => void;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  verificationDelete: (text: string) => void;
  todoForDelete: string;
}

const TodoContext = createContext<TodoContextInterface | null>(null);

type TodoProviderProps = {
  children: ReactNode
}

function TodoProvider(props: TodoProviderProps){

  const [todos, saveTodos] = useLocalStorage<Todo[]>('Todos_V1', []);
  const [searchValue, setSearchValue] = useState("");
  const [filterComplete, setFilterComplete] = useState(false);
  const [createTodoValue, setTodoValue] = useState("");

  const completedTodos = todos.filter((todo) => todo.completed === true).length;
  const totalTodos = todos.length;

  const toogleFilterComplete = () => {
    setFilterComplete(!filterComplete);
  }

  const context: TodoContextInterface = {
    createTodoValue,
    setTodoValue,
    addTodo,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    toogleFilterComplete,
    filterComplete,
    todosFiltered,
    completeTodos,
    deleteTodos,
    openModal,
    setOpenModal,
    verificationDelete,
    todoForDelete

  }

  return (
    <TodoContext.Provider value={context}>
      {props.children}
    </TodoContext.Provider>
  )

}

export { TodoContext, TodoProvider }