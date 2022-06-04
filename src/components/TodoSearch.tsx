import { ChangeEvent } from "react";
import { useTodoContext } from "../hooks/useTodoContext";

import view from '../static/view.png';
import hidden from '../static/hidden.png';


function TodoSearch(){

  const{searchValue, setSearchValue, filterComplete, toogleFilterComplete} = useTodoContext();

  const onSearchValueChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(ev.target.value);
    
  }


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
        <img src={filterComplete ? hidden : view} alt="view or hidden icon" />
      </button>
    </div>
  )
}

export { TodoSearch }