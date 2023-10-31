import React from 'react'

const TaskList = ({ tasks, onDelete }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.title}
          <button style={{ margin: 8 }} onClick={() => onDelete(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}

export default TaskList;