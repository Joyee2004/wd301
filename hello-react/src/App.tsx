import React, { useState } from 'react';
import TaskCard from './TaskCard';
import './App.css';  

function App() {
  const [tasks, setTasks] = useState([
    {
      title: 'Build the website with static content',
      dueDate: '10/04/24',
      assigneeName: 'Joyee',
      card: 'pending',
    },
    {
      title: 'Add a blog',
      dueDate: '22/03/24',
      assigneeName: 'Joyee',
      card: 'pending',
    },
    {
      title: 'Design the mockup',
      completedAtTime: '10/04/24',
      assigneeName: 'Joyee',
      card: 'done',
    },
    {
      title: 'Get the approval from principal',
      completedAtTime: '20/04/24',
      assigneeName: 'Joyee',
      card: 'done',
    },
  ]);

  const addNewTask = () => {
    const newTask = {
      title: 'New Task Title',
      dueDate: 'TBD',
      assigneeName: 'New Assignee',
      card: 'pending',
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="container">
      <h1 className="title">Smarter Tasks</h1>
      <h2 className="subtitle">Project: Graduation Final Year Project</h2>

      <div className="task-grid">
        <div>
          <h2 className="section-title">Pending</h2>
          <div className="task-list">
            {tasks
              .filter((task) => task.card === 'pending')
              .map((task, index) => (
                <TaskCard
                  key={index}
                  card={task.card}
                  title={task.title}
                  dueDate={task.dueDate}
                  assigneeName={task.assigneeName}
                />
              ))}
          </div>
          <button 
            className="add-task-button"
            onClick={addNewTask}
          >
            + New Task
          </button>
        </div>

        <div>
          <h2 className="section-title">Done</h2>
          <div className="task-list">
            {tasks
              .filter((task) => task.card === 'done')
              .map((task, index) => (
                <TaskCard
                  key={index}
                  card={task.card}
                  title={task.title}
                  completedAtTime={task.completedAtTime}
                  assigneeName={task.assigneeName}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
