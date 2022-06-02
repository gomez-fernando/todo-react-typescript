import { useContext } from "react";
import { TodoContext } from "../context/todoContext";


function useTodoContext(){
  const todoContext = useContext(TodoContext);
  
  if(todoContext === null) throw new Error('Todo needs a context');

  return todoContext;
}

export { useTodoContext }