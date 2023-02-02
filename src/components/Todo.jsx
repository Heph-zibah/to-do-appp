import React from 'react'
import {FaTimes} from 'react-icons/fa'

const Todo = ({todo}) => {
  return (
    <li className="todo__list">
        <div className="todo__item">
          <input className="todo__checkbox" type="checkbox" id="checkbox"/>
          <label className="todo__text" for="checkbox">{todo}</label>
        </div>
        <FaTimes className="todo__list--icon"/>
      </li>
  )
}

export default Todo