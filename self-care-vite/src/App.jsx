import { useState } from 'react'
import './App.css'
import Main from './components/Main'

function App() {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState({
    id: '',
    name: '',
    isComplete: false
  })
  const handleChange = (e) => {
    setNewTask({...newTask, [e.target.name]: e.target.value})
  }

  return (
    <div className='app'>
      <Main />
    </div>
  )
}

export default App
