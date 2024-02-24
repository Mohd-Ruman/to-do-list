import React from 'react'
import { useState } from 'react'

export const ToDoForm = ({addTodo}) => {

  const [value, setValue] = useState('')

  const handleSubmit = e => {
    e.preventDefault();

    addTodo(value)

    setValue('');

  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={value} placeholder='Add a new task'
      onChange={(e) => setValue(e.target.value)}/>
      <button type='submit'>Add Task</button>
    </form>
  )
}
