import React from 'react'
import TodoItem from './TodoItem'

export default function TodoBoard(props) {
    
  return (
    <div  className='filedwarp'>
      
      {props.todoList.map((item)=><TodoItem item={item}/>)}
    </div>
  )
}

