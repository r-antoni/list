export const Task = (props) => {
    return ( 
        <div className="flex items-center gap-5">
            <h1 className="font-semibold text-xl">{props.taskName}</h1>
            <button className="border-2 font-bold uppercase border-black rounded-full px-2 bg-red-500" onClick={ ()=> props.deleteTask(props.id) }>X</button>
        </div>
    );
}
