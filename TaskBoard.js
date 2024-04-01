import React from 'react';
import TaskList from './TaskList';


const TaskBoard = ({ tasks, onUpdate, onDelete }) => {
  const statusList = [
    { status: 'Pending', color: 'gray' },
    { status: 'In Progress', color: 'orange' },
    { status: 'Completed', color: 'green' },
    { status: 'Deployed', color: 'navy' },
    { status: 'Deferred', color: 'blue' }, 
  ];

  return (
    <div style={{ backgroundColor: '#f3f3f3', minHeight: '100vh', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <style>
        {`
          .status-card {
            padding: 10px;
            border-radius: 8px;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
            margin: 10px;
            color: white;
          }

          @media screen and (max-width: 768px) {
            .status-card {
              width: calc(50% - 20px);
            }
          }

          @media screen and (max-width: 576px) {
            .status-card {
              width: calc(100% - 20px);
            }
          }
        `}
      </style>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1 style={{ color: 'purple', marginLeft: '20px' }}>Task Board</h1>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button style={{ marginRight: '20px', backgroundColor: 'purple', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>Add New Task</button>
        
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'flex-start', flexWrap: 'wrap' }}>
        {statusList.map((statusInfo) => (
          <div key={statusInfo.status} className="status-card" style={{ backgroundColor: statusInfo.color }}>
            <h2 style={{ marginBottom: '10px' }}>{statusInfo.status}</h2>
            <TaskList
              tasks={tasks.filter((task) => task.status === statusInfo.status)}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
            <button style={{ marginTop: '10px', backgroundColor: 'blue', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>Add New Task</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskBoard;
