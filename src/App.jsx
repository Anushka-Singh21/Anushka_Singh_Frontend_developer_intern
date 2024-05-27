import React from 'react';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Profile from './components/Profile';
import ContentHeader from './components/ContentHeader';
import './App.css';

const App = () => {
  return (
    <div className="dashboard">
      <Sidebar />
    <div className="dashboard--content">
      <Content />
      <Profile />
      </div>
      </div>
  );
};

export default App;
