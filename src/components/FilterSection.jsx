import React from 'react'

const FilterSection = ({todos, setTodos,setFilterStatus,  filterList}) => {
  const clearCompletedTodos = () => {
    setTodos(todos.filter((todo) => !todo.completed));
    setFilterStatus('');
  };
  const todosNoun = todos.length !== 1 ? 'items' : 'item';

  return (
    <>
      <div className="todo__actions">
        {todos.length < 1 ? null : <p className="todo__count">{`${todos.length} ${todosNoun} left`}</p>}
        <div className='todo__act'>{filterList}</div>
        <p className="todo__clear" onClick={clearCompletedTodos}>Clear Completed</p>
      </div>
      <div className="todo__act--mobile">
      {filterList}
      </div>
    </>
  )
}

export default FilterSection