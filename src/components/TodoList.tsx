import { ReactNode } from "react";
import { useTodoContext } from "../hooks/useTodoContext";
import { TodoItem } from "./TodoItem";

type TodoListProps = {
  children?: ReactNode;
}

function TodoList({children}: TodoListProps){

  const {completeTodos, todosFiltered, deleteTodos} = useTodoContext();

  return (
    <section>
      {children}
      <ul>
        {todosFiltered.map(item => (
          <TodoItem 
            key={item.text}
            item={item}
            onComplete={completeTodos}
            onDelete={deleteTodos}
          />
        ))}
      </ul>
    </section>
  )
}

export { TodoList }