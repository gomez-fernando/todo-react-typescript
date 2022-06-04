import { ChangeEvent } from "react";
import { useTodoContext } from "../hooks/useTodoContext";

// import taskImage from '../static/notebook.svg';
import view from '../static/view.png';
import hidden from '../static/hidden.png';


function TodoSearch(){

  const{searchValue, setSearchValue, filterComplete, toogleFilterComplete} = useTodoContext();

  const onSearchValueChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(ev.target.value);
    
  }

  // let icon: string;

  // (filterComplete) ? icon = 'view.png' : icon = 'hidden.png';

  return (
    <div className="todo-search">
      <input  
        value={searchValue}
        onChange={onSearchValueChange}
        className="input-search"
        placeholder="Search task"
      />
      <button
        onClick={toogleFilterComplete}
        className="button-search"
      >
        <img src={filterComplete ? view : hidden} alt="view or hidden icon" />
      </button>
    </div>
  )
}

export { TodoSearch }