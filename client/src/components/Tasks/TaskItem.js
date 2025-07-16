import React, { useState } from 'react';
import axios from 'axios';
import config from '../../config';
import './Tasks.css';

const TaskItem = ({ task, onTaskUpdated, onTaskDeleted, onEditTask }) => {
  const [loading, setLoading] = useState(false);

  const handleStatusChange = async (newStatus) => {
    setLoading(true);
    try {
      const response = await axios.put(`${config.API_BASE_URL}/api/tasks/${task._id}`, {
        ...task,
        status: newStatus
      });
      onTaskUpdated(response.data);
    } catch (error) {
      console.error('Error updating task:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      try {
        await axios.delete(`${config.API_BASE_URL}/api/tasks/${task._id}`);
        onTaskDeleted(task._id);
      } catch (error) {
        console.error('Error deleting task:', error);
      }
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'No due date';
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'To Do': return '#6c757d';
      case 'In Progress': return '#ffc107';
      case 'Done': return '#28a745';
      default: return '#6c757d';
    }
  };

  const isOverdue = () => {
    if (!task.dueDate || task.status === 'Done') return false;
    return new Date(task.dueDate) < new Date();
  };

  return (
    <div className={`task-item ${task.status.toLowerCase().replace(' ', '-')} ${isOverdue() ? 'overdue' : ''}`}>
      <div className="task-content">
        <div className="task-header">
          <h4 className="task-title">{task.title}</h4>
          <div className="task-actions">
            <button 
              onClick={() => onEditTask(task)} 
              className="edit-btn"
              title="Edit task"
            >
              ✏️
            </button>
            <button 
              onClick={handleDelete} 
              className="delete-btn"
              title="Delete task"
            >
              🗑️
            </button>
          </div>
        </div>
        
        {task.description && (
          <p className="task-description">{task.description}</p>
        )}
        
        <div className="task-meta">
          <div className="task-due-date">
            <strong>Due: </strong>
            <span className={isOverdue() ? 'overdue-text' : ''}>
              {formatDate(task.dueDate)}
            </span>
          </div>
          
          <div className="task-status">
            <select
              value={task.status}
              onChange={(e) => handleStatusChange(e.target.value)}
              disabled={loading}
              className="status-select"
              style={{ backgroundColor: getStatusColor(task.status) }}
            >
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </select>
          </div>
        </div>
        
        <div className="task-timestamps">
          <small>Created: {new Date(task.createdAt).toLocaleDateString()}</small>
          {task.updatedAt !== task.createdAt && (
            <small>Updated: {new Date(task.updatedAt).toLocaleDateString()}</small>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskItem;