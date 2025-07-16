import React from 'react';
import './Tasks.css';

const TaskFilter = ({ filter, onFilterChange }) => {
  const filters = [
    { value: 'all', label: 'All Tasks' },
    { value: 'To Do', label: 'To Do' },
    { value: 'In Progress', label: 'In Progress' },
    { value: 'Done', label: 'Done' }
  ];

  return (
    <div className="task-filter">
      <label htmlFor="filter-select">Filter by status:</label>
      <select
        id="filter-select"
        value={filter}
        onChange={(e) => onFilterChange(e.target.value)}
        className="filter-select"
      >
        {filters.map(filterOption => (
          <option key={filterOption.value} value={filterOption.value}>
            {filterOption.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TaskFilter;