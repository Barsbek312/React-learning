import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import MainContent from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter >
      <div className="app-wrapper">
        <Header />
        <SideBar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/dialogs/*' element={<Dialogs/>}/>
            <Route path='/profile' element={<MainContent/>}/>
          </Routes>
        </div> 
      </div>
    </BrowserRouter>
  );
}

export default App;
