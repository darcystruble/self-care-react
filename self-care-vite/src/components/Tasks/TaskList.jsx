export default function TaskList (props) {
    console.log(props.tasks)
    const deleteItem = (e) => {
        console.log(e)
    }

    if (props.tasks.length === 0) {
        return null
    } else {
        return (
            <div className="task-outer">
                {props.tasks.map((item)=> (
                    <div className="task-card">
                        <li className="task-li">
                            <div className="task-li-1">
                                <div className="checkbox unchecked"></div>
                                <div className="task-text">{item.task}</div>
                            </div>
                            <div className="task-btns">
                                <button className="task-btn">✏️</button>
                                <button className="task-btn" onClick={deleteItem}>❌</button>
                            </div>
                       </li>
                    </div>
                ))}
            </div>
        )
    }
    // return (
    //     <ul>
    //             <li>
    //                 <div>Take a walk</div>
    //                 <div><button>Edit</button><button>Delete</button></div>
    //             </li>
    //         </ul>
    // )
}