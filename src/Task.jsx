const Task = (props) => {
    const{taskName, id, isComplete, deleteTask, completeTask} = props
    return (
        <div className="flex justify-center items-center gap-3 px-5 py-3 w-min-screen">
            <h1 className={isComplete ? 'bg-green-200 px-6 py-3 rounded-lg line-through font-medium': 'bg-red-200 px-6 py-3 rounded-lg font-medium'}>{taskName}</h1>
            <button className="bg-slate-100 border border-slate-400 rounded-lg px-4 py-2 font-medium text-sm ml-5" onClick={()=> completeTask(id)}>Complete</button>
            <button className="bg-slate-100 border border-slate-400 rounded-lg px-6 py-2 font-medium text-sm" onClick={()=> deleteTask(id)}>Delete</button>
        </div>
    );
}

export default Task;