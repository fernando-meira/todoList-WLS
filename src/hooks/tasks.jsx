import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const TasksContext = createContext({});

const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TasksContext.Provider>
  );
};

function useTasks() {
  const context = useContext(TasksContext);

  if (!context) {
    throw new Error('useTasks must be used within a TasksProvider');
  }
  return context;
}

export { TasksProvider, useTasks };

TasksProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
