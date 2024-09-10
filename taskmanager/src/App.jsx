// src/App.js
import React, { Suspense, lazy } from 'react';
import {  useDispatch, useSelector } from 'react-redux';

import { addTask, deleteTask } from './redux/taskSlice';

const TaskList = lazy(() => import('./components/TaskList'));

const App = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks);
  const [taskName, setTaskName] = React.useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      dispatch(addTask({ id: Date.now(), name: taskName }));
      setTaskName('');
    }
  };

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Add a new task"
        />
        <button type="submit">Add Task</button>
      </form>
      <Suspense fallback={<div>Loading tasks...</div>}>
        <TaskList tasks={tasks} onDelete={handleDeleteTask} />
      </Suspense>
    </div>
  );
};

export default App
