import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import MainContent from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { Route, Routes } from 'react-router-dom';
import Users from './components/Users/Users';

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <SideBar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/dialogs/*' element={<DialogsContainer/>} />
          <Route path='/profile' element={<MainContent />} />
          <Route path='/users' element={<Users/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
