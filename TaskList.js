
import React from 'react';
import TaskItem from './Taskitem';

const TaskList = ({ status, tasks, onUpdate, onDelete }) => {
  return (
    <div>
      <h2>{status}</h2>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TaskList;