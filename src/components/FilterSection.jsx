import React, { useState } from 'react'
import FilterButton from './FilterButton';
const FILTER_MAP = {
  All: () => true,
  Active: (todo) => !todo.completed,
  Completed: (todo) => todo.completed
};
const FILTER_NAMES = Object.keys(FILTER_MAP);


const FilterSection = ({todos, setTodos,setFilterStatus}) => {
  
  const clearCompletedTodos = () => {
    setTodos(todos.filter((todo) => !todo.completed));
    setFilterStatus("all");
  };
  const todosNoun = todos.length !== 1 ? 'items' : 'item';
  return (
    <>
      <div className="todo__actions">
      {todos.length < 1 ? null : <p className="todo__count">{`${todos.length} ${todosNoun} left`}</p>}
      {FILTER_NAMES.map((name) => {
        <FilterButton/>
      })}
      
      <p className="todo__clear" onClick={() => clearCompletedTodos}>Clear Completed</p>
    </div>
    <div className="todo__act--mobile">
    <p>All</p>
    <p>Active</p>
    <p>Completed</p>
    </div>
    </>
  )
}

export default FilterSection