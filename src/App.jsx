import React from "react";

function App() {
  return (
   <>
    <div className="todo__body">
      <h3>todo</h3>
     <form className="todo__form">
      <input className="todo__input" type="text" placeholder="Create a new todo..."/>
      <button>Add</button>
     </form>
     <ul className="todo__lists">
      <li className="todo__list">
        <div>
          <input className="todo__checkbox" type="checkbox" />
          <p className="todo__text">Complete online Javascript course</p>
        </div>
      </li>
     </ul>
     <div className="todo__actions">
      <p className="todo__count">5 items left</p>
      <div className="todo__act">
        <p>All</p>
        <p>Active</p>
        <p>Completed</p>
      </div>
      <p>Clear Completed</p>
    </div>
    </div>
    
    </>
  );
}

export default App;
