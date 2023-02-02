import React from 'react'

const Todo = () => {
  return (
    <li className="todo__list">
        <div className="todo__item">
          <input className="todo__checkbox" type="checkbox" id="checkbox"/>
          <label className="todo__text" for="checkbox">Complete online Javascript course</label>
        </div>
        <FaTimes className="todo__list--icon"/>
      </li>
  )
}

export default Todo