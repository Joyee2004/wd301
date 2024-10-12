
import React from 'react';
import './TaskCard.css';
interface TaskCardProps {
  card: string;
  title: string;
  dueDate?: Date;
  completedAtTime?: Date;
  assigneeName: string;
}
const TaskCard: React.FC<TaskCardProps> = ({ card, title, dueDate, completedAtTime, assigneeName }) => {
  return (
    <div className={`TaskItem ${card === 'pending' ? 'pending' : 'completed'}`}>
      <h3 className="title">{title}</h3>
      {dueDate && <p className="status">Due: {dueDate.toLocaleDateString("en-CA")}</p>}
      {completedAtTime && <p className="status">Completed: {completedAtTime.toLocaleDateString("en-CA")}</p>}
      <p className="assignee">Assignee: {assigneeName}</p>
    </div>
  );
};
export default TaskCard;