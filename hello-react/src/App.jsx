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
    <div>
      <h1 className="text-3xl font-bold text-center">Smarter Tasks</h1>
      <h2 className="text-xl text-center mb-4">Project: Graduation Final Year Project</h2>

      <div className="grid grid-cols-2 gap-8">
        {/* Pending Section */}
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Pending</h2>
          <div className="space-y-4">
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
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={addNewTask}
          >
            + New Task
          </button>
        </div>

        
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Done</h2>
          <div className="space-y-4">
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
