import React from 'react';
import './TaskCard.css';

interface TaskCardProps {
  card: string;
  title: string;
  dueDate?: string;
  completedAtTime?: string;
  assigneeName: string;
}

const TaskCard: React.FC<TaskCardProps> = ({ card, title, dueDate, completedAtTime, assigneeName }) => {
  return (
    <div className={`TaskItem ${card === 'pending' ? 'pending' : 'completed'}`}>
      <h3 className="title">{title}</h3>
      {dueDate && <p className="status">Due: {dueDate}</p>}
      {completedAtTime && <p className="status">Completed: {completedAtTime}</p>}
      <p className="assignee">Assignee: {assigneeName}</p>
    </div>
  );
};

export default TaskCard;
