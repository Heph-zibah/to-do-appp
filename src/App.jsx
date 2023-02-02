import React from "react";
import {FcPlus} from 'react-icons/fc'
import {IoIosSunny} from 'react-icons/io'
import {FaTimes} from 'react-icons/fa'

function App() {
  return (
   <>
    <div className="todo__body">
      <div className="todo__head">
        <h3>todo</h3>
        <IoIosSunny className="todo__head--icon"/>
      </div>
     <form className="todo__form">
      <input className="todo__input" type="text" placeholder="Create a new todo..."/>
      <button><FcPlus/></button>
     </form>
     <ul className="todo__lists">
      <li className="todo__list">
        <div className="todo__item">
          <input className="todo__checkbox" type="checkbox" id="checkbox"/>
          <label className="todo__text" for="checkbox">Complete online Javascript course</label>
        </div>
        <FaTimes className="todo__list--icon"/>
      </li>
     </ul>
     <div className="todo__actions">
      <p className="todo__count">5 items left</p>
      <div className="todo__act">
        <p>All</p>
        <p>Active</p>
        <p>Completed</p>
      </div>
      <p className="todo__clear">Clear Completed</p>
    </div>
    <div className="todo__act--mobile">
        <p>All</p>
        <p>Active</p>
        <p>Completed</p>
    </div>
    </div>
    
    </>
  );
}

export default App;
