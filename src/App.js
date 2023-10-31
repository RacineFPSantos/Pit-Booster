import React, { useState } from 'react'
import {Link, useLocation, Route, Routes} from 'react-router-dom'

import Home from './routes/Home'
import AAAPatter from './routes/AAAPatter'
import About from './routes/About'
import NotFound from './routes/NotFound'

import { buildTask } from "./builders/taskBuilder";
import { addTask, deleteTask, getAllTasks } from "./services/taskService";

export const LocationDisplay = () => {
  const location = useLocation()

  return <div style={{ marginTop: 12 }} data-testid="location-display">Você se encontra em: {location.pathname}</div>
}

export const App = () => {
  const [tasks, setTasks] = useState(getAllTasks());

  const handleAddTask = (taskData) => {
    const newTask = buildTask(taskData.title);
    addTask(newTask);
    setTasks(getAllTasks());
  };

  const handleDeleteTask = (taskId) => {
    deleteTask(taskId);
    setTasks(getAllTasks());
  };

  return (
    <div style={{ padding: 8}}>
      <Link style={{ margin: 4 }} to="/">Home</Link>
      <Link style={{ margin: 4 }} to="/AAAPatter">AAAPatter</Link>
      <Link style={{ margin: 4 }} to="/about">About</Link>
      <Link style={{ margin: 4 }} to="/notfound">NotFound</Link>
    
      <Routes>
        <Route path="/" element={
          <Home 
            onSubmit={ handleAddTask } 
            tasks={ tasks }
            onDelete={ handleDeleteTask }
          />
        } />

        <Route path="/AAAPatter" element={<AAAPatter />} />
        <Route path="/about" element={<About />} />
    
        <Route path="*" element={<NotFound />} />
      </Routes>
    
      <LocationDisplay />
    </div>
  )
}
