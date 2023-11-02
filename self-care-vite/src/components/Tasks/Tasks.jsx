import { useState } from "react"
import TaskList from "./TaskList"
import './Tasks.css'

export default function Tasks () {
    const [tasks, setTasks] = useState([])
    const [item, setItem] = useState('')

    const handleChange = (e) => {
        // console.log(e.target.value)
        setItem(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(item)
        let list = [...tasks, 'task']
        setTasks([...tasks, {task: item, isComplete: false}])
    }
    return (
        <div className="tasks-outer">
            <h2>Self Care Checklist</h2>
            <TaskList tasks={tasks}/>
            <form onSubmit={handleSubmit} className="tasks-form">
                <input type="text" name="task" placeholder="Add item" onChange={handleChange} className="tasks-input"/>
                <button type="submit" className="tasks-btn">Add</button>
            </form>
        </div>
    )
}