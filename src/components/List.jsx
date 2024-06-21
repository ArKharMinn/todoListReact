import React from 'react'
import Cart from './Cart'

const List = ({tasks,deleteBtn,updateTask}) => {
  return (
      <div>
      <Cart tasks={tasks} deleteBtn={deleteBtn} updateTask={ updateTask} />
    </div>
  )
}

export default List
