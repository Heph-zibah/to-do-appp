import React from 'react'
import {FaTimes} from 'react-icons/fa'

const Todo = ({todo, toggleComplete, deleteTodo}) => {
  return (
    <li className={todo.completed ? 'todo__list--complete' : "todo__list"}>
        <div className="todo__item">
          <input onChange={() => toggleComplete(todo)} className="todo__checkbox" type="checkbox" id={`checkbox-${todo.id}`} checked={todo.completed ? 'checked' : ''}/>
          <label htmlFor={`checkbox-${todo.id}`} onClick={() => toggleComplete(todo)} className={todo.completed ? 'todo__text--complete' : "todo__text"}>{todo.text}</ label>
        </div>
        <FaTimes onClick={() => deleteTodo(todo.id)} className="todo__list--icon"/>
      </li>
  )
}

export default Todo