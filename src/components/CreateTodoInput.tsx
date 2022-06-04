import { ChangeEvent } from "react";
import { useTodoContext } from "../hooks/useTodoContext";

function CreateTodoInput(){

  const {createTodoValue, setTodoValue} = useTodoContext();

  const onInputValueChange = (ev: ChangeEvent<HTMLTextAreaElement>) => {
    setTodoValue(ev.target.value)
  }

  return (
    <div className="create-todo-input">
      <label htmlFor="">New Task</label>
      <textarea onChange={onInputValueChange} value={createTodoValue} placeholder="Write your task.." />
    </div>
  )
}

export { CreateTodoInput }