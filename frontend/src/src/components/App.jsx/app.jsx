import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Splash from './screens/Splash';
import Dashboard from './screens/Dashboard';
import TaskFeed from './screens/TaskFeed';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tasks" element={<TaskFeed />} />
      </Routes>
    </Router>
  );
}

export default App;
