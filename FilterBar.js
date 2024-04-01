
import React, { useState } from 'react';

const FilterBar = ({ filters, onFilterChange }) => {
  const [assignee, setAssignee] = useState(filters.assignee);
  const [priority, setPriority] = useState(filters.priority);
  const [startDate, setStartDate] = useState(filters.startDate || '');
  const [endDate, setEndDate] = useState(filters.endDate || '');

  const handleApplyFilters = () => {
    const newFilters = {
      assignee: assignee || '',
      priority: priority || '',
      startDate: startDate ? new Date(startDate) : null,
      endDate: endDate ? new Date(endDate) : null,
    };
    onFilterChange(newFilters);
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Assignee"
        value={assignee}
        onChange={(e) => setAssignee(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        style={{ marginRight: '10px' }}
      >
        <option value="">All Priorities</option>
        <option value="P0">P0</option>
        <option value="P1">P1</option>
        <option value="P2">P2</option>
      </select>
      <input
        type="date"
        placeholder="Start Date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <input
        type="date"
        placeholder="End Date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <button onClick={handleApplyFilters}>Apply Filters</button>
    </div>
  );
};

export default FilterBar;
