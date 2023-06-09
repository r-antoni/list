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

  return (
    <div className="App">
      
      <div className="addTask">
        <input className="border-2" onChange={handleChange}/>
        <button onClick = {addTask}> Add Task </button>
      </div>
      
      <div className="list">
        {toDo.map((task) =>{
          return (
          <div>
            <h1>{task}</h1>
            <button>X</button>
          </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
