import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState([]);
  const [newTask, setNewTask] = useState("")

  const handleChange  = (event) => {
    setNewTask(event.target.value)
  }
  const addTask = () => {
    const task = {
      id: toDo.length === 0 ? 1 : toDo[toDo.length - 1].id + 1,
      taskName: newTask
    }
    setToDo([...toDo, task])
  }

  const deleteTask = (id) => {
    setToDo(toDo.filter((task) =>{
      return task.id !== id
    }))
  }

  return (
    <div className="App flex flex-col w w-full items-center">

      <div className="addTask flex justify-center items-center w-[100%] px-10 py-10 gap-5">
        <input className="border-2 border-black rounded-xl px-4 py-2" onChange={handleChange}/>
        <button className="border-2 font-bold uppercase border-black rounded-xl px-3 py-2" onClick = {addTask}> Add Task </button>
      </div>
      
      <div className="list flex flex-col items-center py-6 h-auto w-[100%] ">
        {toDo.map((task) =>{
          return (
          <div className="flex items-center gap-4">
            <h1 className="font-semibold text-xl">{task.taskName}</h1>
            <button className="border-2 font-bold uppercase border-black rounded-xl px-2 py-1" onClick={()=> deleteTask(task.id) }>X</button>
          </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
