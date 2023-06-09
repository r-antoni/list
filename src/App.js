import { useState } from "react";
import {Task} from "./Task";

function App() {
  const [toDo, setToDo] = useState([]);
  const [newTask, setNewTask] = useState("")

  const handleChange  = (event) => {
    setNewTask(event.target.value)
  }
  const addTask = () => {
    const task = {
      id: toDo.length === 0 ? 1 : toDo[toDo.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    }
    setToDo([...toDo, task])
  }
  
  const completeTask = (id) => {
    setToDo(
      toDo.map((task) =>{
        if(task.id === id){
          return {...task, completed: true}
        }else{
          return task
        }
      })
    )
  }

  const deleteTask = (id) => {
    setToDo(toDo.filter((task) =>{
      return task.id !== id
    }))
  }

  return (
    <div className="App flex flex-col w w-full items-center">

      <div className="addTask flex justify-center items-center w-[100%] px-10 py-10 gap-5 bg-zinc-500">
        <input className="border-2 border-slate-300 rounded-xl px-4 py-2" onChange={handleChange}/>
        <button className="font-medium bg-slate-300 px-3 py-2 rounded-xl" onClick = {addTask}> Add Task </button>
      </div>
      
      <div className="list flex flex-col items-center gap-10 py-6 h-auto w-[100%] ">
        {toDo.map((task) =>{
          return (
          <Task taskName={task.taskName} id={task.id} completed={task.completed} deleteTask={deleteTask} completeTask={completeTask}/>
          )
        })}
      </div>
    </div>
  );
}

export default App;
