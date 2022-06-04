import React, { createContext, ReactNode, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export type Todo = {text: string; completed: boolean};

export type TodoContextInterface = {
  createTodoValue: string;
  setTodoValue: React.Dispatch<React.SetStateAction<string>>;
  addTodo: () => void;
  completedTodos: number;
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

  const filter = () =>{
    if(filterComplete){
      const todosFilter = todos.filter((todo) => todo.completed === false);
      return todosFilter.filter((todo) => 
        todo.text.toLocaleLowerCase().includes(searchValue.toLowerCase())
      );
    }else{
      return todos.filter((todo) => 
        todo.text.toLowerCase().includes(searchValue.toLowerCase())
      );
    }
  }

  const todosFiltered = filter();

  const completeTodos = (text: string) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    const toogleComplete = !newTodos[todoIndex].completed;
    newTodos[todoIndex] = {
      ...todos[todoIndex],
      completed: toogleComplete
    };
    saveTodos(newTodos);
  }

  const [openModal, setOpenModal] = useState(false);
  const [todoForDelete, setTodoForDelete] = useState('');

  const deleteTodos = () => {
    const todoIndex = todos.findIndex((todo) => todo.text === todoForDelete);
    if(todoIndex < 0) return;

    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);

    setOpenModal(false);
  }

  const addTodo = () => {
    if(createTodoValue.length <= 0){
      return;
    }
    const newTodos = [...todos];
    const newTodo: Todo = {
      text: createTodoValue,
      completed: false
    };
    newTodos.push(newTodo);

    saveTodos(newTodos);
    setTodoValue('');
  }

  const verificationDelete = (text: string) => {
    setOpenModal(true);
    setTodoForDelete(text);
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