import { useState } from 'react'
import Task from './Task'

function App() {
  const [taskList, setTasklist]= useState([])
  const [newTask, setNewTask]= useState("")

  const handleChange =(event)=>{
    setNewTask(event.target.value)
  }
  const addTask =()=>{
    const taskData = {
      id: taskList.length === 0 ? 1 : taskList[taskList.length -1].id +1,
      taskName: newTask,
      isComplete: false,
    }
    setTasklist([...taskList, taskData])
  }
  const deleteTask=(id)=>{
    setTasklist(taskList.filter((task)=> task.id !== id))
  }
  const completeTask=(id)=>{
    setTasklist(taskList.map((task)=>{
      if(task.id === id){
        return {...task, isComplete: true}
      } else{
        return task
      }
    }))
  }
  return (
    <div className="flex flex-col gap-5 min-w-screen min-h-screen items-center bg-[url('./assets/bg.jpg')]">
      <div className="flex justify-center items-center gap-5 px-10 py-10 w-full">
        <input className="border-2 border-slate-900 rounded-lg px-4 py-2 w-1/4 font-medium" type="text" onChange={handleChange}/>
        <button className="bg-slate-200 border border-slate-400 rounded-lg px-4 py-2 font-medium" onClick={addTask} >Add Task</button>
      </div>
      <div className="flex flex-col justify-center items-center gap-5 w-full">
        {taskList.map((task)=>{
          return (
          <Task taskName={task.taskName} id={task.id} isComplete={task.isComplete} deleteTask={deleteTask} completeTask={completeTask}/>
          )})}
      </div>
    </div>
  )
}

export default App
