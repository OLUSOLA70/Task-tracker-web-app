import React from 'react';

const TaskItem = ({ task, onUpdate, onDelete }) => {
  const handleUpdate = (updatedTask) => {
    onUpdate(updatedTask);
  };

  const handleDelete = () => {
    if (task.status !== 'Completed') {
      onDelete(task.id);
    }
  };

  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Assignee: {task.assignee}</p>
      <p>Priority: {task.priority}</p>
      <p>Start Date: {new Date(task.startDate).toLocaleDateString()}</p>
      {task.status === 'Completed' && (
        <p>End Date: {new Date(task.endDate).toLocaleDateString()}</p>
      )}
      <button onClick={() => handleUpdate({ ...task, status: 'In Progress' })}>
        Start
      </button>
      <button onClick={() => handleUpdate({ ...task, status: 'Completed' })}>
        Complete
      </button>
      <button onClick={handleDelete} disabled={task.status === 'Completed'}>
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
