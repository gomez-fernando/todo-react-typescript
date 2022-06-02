import { TodoProvider } from "../context/todoContext";
import { AppUI } from "./AppUI";

function App(){

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  )
}

export { App }