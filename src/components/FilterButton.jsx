import React from 'react'

const FilterButton = ({ name, isPressed, setFilter, className, onClick }) => {
  return (
    <div>
    <button  
     type="button"
     className={`todo__filter--btn ${className}`}
     aria-pressed={isPressed}
     onClick={() => {
       setFilter(name);
       onClick(name);
     }}>
      <span>{name}</span>
    </button>
  </div>
  )
}

export default FilterButton