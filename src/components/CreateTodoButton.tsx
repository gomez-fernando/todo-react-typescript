import { useTodoContext } from "../hooks/useTodoContext";

function CreateTodoButton(){

  const{addTodo} = useTodoContext();

  return (
    <button
      onClick={addTodo}
      className="button"
    >
      Create Task
    </button>
  )

}

export { CreateTodoButton }