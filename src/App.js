import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import MainContent from './components/Profile/Profile';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <SideBar />
      <MainContent />
    </div>
  );
}

export default App;
