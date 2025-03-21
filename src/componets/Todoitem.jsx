import React from 'react'

const Todoitem = ({todo}) => {
  return (
    <div className='flex gap-4  mx-auto text-black justify-between'>
      <h1>{todo.task}</h1>
      <p> {todo.status}</p>
    </div>
  )
}

export default Todoitem
