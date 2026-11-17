
import { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  function addTask() {
    if (task.trim() === '') return;

    setTasks([...tasks, {
      id: Date.now(),
      title: task,
      completed: false
    }]);

    setTask('');
  }

  return (
    <div className="container">
      <h1>Personal Task Manager</h1>
      <p>Manage your daily tasks easily!</p>

      <input
        type="text"
        placeholder="Enter a new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
