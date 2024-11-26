import React, { useEffect, useState } from 'react';
import { fetchTasks } from '../api/taskApi';

function TaskPage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function getTasks() {
      const data = await fetchTasks();
      setTasks(data);
    }
    getTasks();
  }, []);

  return (
    <div>
      <h1>Tasks</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default TaskPage;
