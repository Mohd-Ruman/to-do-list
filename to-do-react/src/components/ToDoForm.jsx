import React from 'react'
import { useState } from 'react'

export const ToDoForm = () => {

  const [value, setValue] = useState('')
  return (
    <form>
      <input type='text' placeholder='Add a new task'
      onChange={(e) => console.log(e.target.value)}/>
      <button type='submit'>Add Task</button>
    </form>
  )
}
