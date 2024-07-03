import { useState } from 'react';

const TasksPage = () => {
  const [tasks, setTasks] = useState(["Task 1", "Task 2"]);

  return (
    <div>
      <h1>Tasks</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default TasksPage;
