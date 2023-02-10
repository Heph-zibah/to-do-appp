import React from 'react'

const FilterButton = (props) => {
  return (
    <div>
    <button  type="button"
      className="btn toggle-btn"
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)}>
      <span>{props.name}</span>
      
    </button>
  </div>
  )
}

export default FilterButton