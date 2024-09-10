// src/components/TaskList.js
import React from 'react';

const TaskList = ({ tasks, onDelete }) => {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          {task.name}
          <button onClick={() => onDelete(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
