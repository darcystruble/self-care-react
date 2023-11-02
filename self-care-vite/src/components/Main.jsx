import { Route, Routes } from 'react-router-dom'
import Tasks from './Tasks/Tasks'

export default function Main () {
    return (
        <div className="main-outer">
            <div className="hello-message">Hello, friend!</div>
            <Tasks />
        </div>
    )
}