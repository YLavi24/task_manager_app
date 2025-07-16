import React from 'react';
import TaskItem from './TaskItem';
import './Tasks.css';

const TaskList = ({ tasks, onTaskUpdated, onTaskDeleted, onEditTask }) => {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <h3>No tasks found</h3>
        <p>Create your first task to get started!</p>
      </div>
    );
  }

  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskItem
          key={task._id}
          task={task}
          onTaskUpdated={onTaskUpdated}
          onTaskDeleted={onTaskDeleted}
          onEditTask={onEditTask}
        />
      ))}
    </div>
  );
};

export default TaskList;