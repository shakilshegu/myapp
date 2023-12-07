import React, { useState } from 'react'

let id = 0

const INITAL_TASK = [
    {id:id++,label:"Playing Football"}
]
export const List = () => {
  const [tasks,setTasks] = useState(INITAL_TASK)
  const [newstask,setNewTask] = useState('')

  return (
   <>
   <h2 className='p-5 text-lg'>ToDoList</h2>
   <div>
    <input 
    className='border-cyan-600 ml-2 bg-slate-300'
    type="text" 
    placeholder='Add Your Tasks'
    aria-label='Add new Task'
    value={newstask}
    onChange={((event)=>{
     setNewTask(event.target.value)
    })}
    />
   </div>
   <button onClick={()=>{
       setTasks(tasks.concat({
        id:id++,
        label:newstask.trim()
       }));
       setNewTask('')
   }} className=' p-1 mt-2 ml-2 bg-black text-white'>
        Submit
    </button>
    <div className='flex'>
        <ul className='p-2'>
            {tasks.map(({id,label})=>(
                <li key={id}>
                    <span>{label}</span>
                    <button className="ml-2"onClick={()=>{
                        setTasks(tasks.filter((task)=> task.id!==id))
                    }}>Delete</button>
                </li>
                
            ))}
        </ul>
       
    </div>
   </>
  )
}
