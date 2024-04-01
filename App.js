import React, { useState } from 'react';
import TaskBoard from './TaskBoard';
import TaskForm from './TaskForm';
import FilterBar from './FilterBar';
import './App.css'; // Import the CSS file for styling

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filters, setFilters] = useState({
    assignee: '',
    priority: '',
    startDate: null,
    endDate: null,
  });

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const updateTask = (updatedTask) => {
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const filteredTasks = tasks.filter((task) => {
    const { assignee, priority, startDate, endDate } = filters;
    const matchesAssignee = !assignee || task.assignee === assignee;
    const matchesPriority = !priority || task.priority === priority;
    const matchesStartDate = !startDate || task.startDate >= startDate;
    const matchesEndDate = !endDate || task.endDate <= endDate;
    return (
      matchesAssignee &&
      matchesPriority &&
      matchesStartDate &&
      matchesEndDate
    );
  });

  return (
    <div className="app-container">
      <div className="header">
        <h1 className="title">Task Board</h1>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg" alt="Profile Icon" style={{ width: '30px', height: '30px' }} />
      </div>
      <div className="content">
        <FilterBar filters={filters} onFilterChange={handleFilterChange} />
        <TaskForm onSubmit={addTask} />
        <TaskBoard
          tasks={filteredTasks}
          onUpdate={updateTask}
          onDelete={deleteTask}
          style={{ maxWidth: '800px', margin: '0 auto' }}
        />
      </div>
    </div>
  );
};

export default App;
