import '../styles/App.css';
import taskImage from '../static/notebook.svg';

import { CreateTodoInput } from "../components/CreateTodoInput"
import { TodoList } from "../components/TodoList"
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import  Modal  from '../components/Modal';
import { useTodoContext } from '../hooks/useTodoContext';

function AppUI(){

  const {openModal, setOpenModal, deleteTodos, todoForDelete} = useTodoContext();

  return (
    <div className="app">
      <div className="create-tasks-container" >
        <h2 className="subtitle" >Create a New Task</h2>
        <CreateTodoInput />
        <CreateTodoButton />
        <img src={taskImage} alt="notebook" />
      </div>
      <div className="tasks-container">
        <h1 className="title">Your tasks</h1>
        <TodoCounter />
        <TodoSearch />
        <TodoList />

        {openModal && (
          <Modal>
            <h1>Are you sure to delete the task?</h1>
            <p>{todoForDelete}</p>
            <div className="in-line-buttons">
              <button className="button"
                onClick={deleteTodos}
              >
                Yes
              </button>
              <button className="button"
                onClick={() => setOpenModal(!openModal)}
              >
                No
              </button>
            </div>
          </Modal>
        )}
      </div>

    </div>
  )

}

export { AppUI }