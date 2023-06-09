export const Task = (props) => {
    return ( 
        <div className="flex items-center gap-8 font-semibold text-xl">
            <h1 className={props.completed ? 'bg-green-400 px-5 py-2 rounded-xl': 'bg-red-400 px-5 py-2 rounded-xl'}>{props.taskName}</h1>
            <div className="flex items-center gap-2">
                <button className="font-medium text-sm bg-slate-300 px-3 py-2 rounded-xl" onClick={ ()=> props.completeTask(props.id)} >Complete</button>
                <button className="font-medium text-sm bg-slate-300 px-3 py-2 rounded-xl" onClick={ ()=> props.deleteTask(props.id) }>Delete</button>
            </div>
            
        </div>
    );
}
