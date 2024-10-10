import React from 'react';
import './TaskCard.css'; 

const TaskCard = ({ card, title, dueDate, completedAtTime, assigneeName }) => {
  return (
    <div className={`TaskCard ${card === 'pending' ? 'bg-yellow-100' : 'bg-green-100'} shadow-md rounded-lg p-4`}>
      <h3 className="font-bold text-lg">{title}</h3>
      {dueDate && <p className="text-sm text-gray-700">Due: {dueDate}</p>}
      {completedAtTime && <p className="text-sm text-gray-700">Completed: {completedAtTime}</p>}
      <p className="text-sm text-gray-600">Assignee: {assigneeName}</p>
    </div>
  );
};

export default TaskCard;
