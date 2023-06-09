import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState([]);
  const [newTask, setNewTask] = useState("")

  const handleChange  = (event) => {
    setNewTask(event.target.value)
  }
  const addTask = () => {
    setToDo([...toDo, newTask])
  }

  const deleteTask = (taskName) => {
    setToDo(toDo.filter((task) =>{
      return task !== taskName
    }))
  }

  return (
    <div className="App">

      <div className="addTask">
        <input className="border-2" onChange={handleChange}/>
        <button className="border-2" onClick = {addTask}> Add Task </button>
      </div>
      
      <div className="list">
        {toDo.map((task) =>{
          return (
          <div>
            <h1>{task}</h1>
            <button className="border-2" onClick={()=> deleteTask(task) }>X</button>
          </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
