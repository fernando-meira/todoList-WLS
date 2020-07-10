import React from 'react';

import Routes from './routes';
import GlobalStyle from './themes/global';
import { TasksProvider } from './hooks/tasks';

function App() {
  return (
    <>
      <GlobalStyle />
      <TasksProvider>
        <Routes />
      </TasksProvider>
    </>
  );
}

export default App;
