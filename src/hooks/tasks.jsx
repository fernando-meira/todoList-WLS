import React, { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import api from '../services/api';

const TasksContext = createContext({});

const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await api.get('api/tarefas');

        setTasks(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  const removeTask = (id) => {
    setTasks((state) => state.filter((task) => task.id !== id));

    if ((state) => state.filter((task) => task.id === id)) {
      const identify = id;

      try {
        api.delete(`api/tarefas/${identify}`);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <TasksContext.Provider value={{ tasks, setTasks, removeTask }}>
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
