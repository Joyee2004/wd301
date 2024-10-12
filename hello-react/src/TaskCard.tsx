import React from 'react';
import './TaskCard.css';

interface TaskCardProps {
  card: string;
  title: string;
  dueDate?: Date;
  completedAtDate?: Date;
  assigneeName: string;
}

const TaskCard: React.FC<TaskCardProps> = ({ card, title, dueDate, completedAtDate, assigneeName }) => {
  return (
    <div className={`TaskItem ${card === 'pending' ? 'pending' : 'completed'}`}>
      <h3 className="title">{title}</h3>
     
      {completedAtDate && <p className="status">Completed: {completedAtDate.toLocaleDateString("en-CA")}</p>}
      {!completedAtDate && dueDate && (
        <p>Due on: {dueDate.toLocaleDateString("en-CA")}</p>
      )}
      <p className="assignee">Assignee: {assigneeName}</p>
    </div>
  );
};

export default TaskCard;
