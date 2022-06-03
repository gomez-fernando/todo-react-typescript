import { Todo } from "../context/todoContext"
import { useTodoContext } from "../hooks/useTodoContext";

type TodoItemProps = {
  item: Todo,
  onComplete: (text: string) => void,
  onDelete: (text: string) => void
}

function TodoItem({item, onComplete, onDelete} : TodoItemProps){
  const {verificationDelete} = useTodoContext();

  return (
    <li>
      className={item.completed ? 'completed' : ''}
    </li>
  )
}

export {TodoItem}