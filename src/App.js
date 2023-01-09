import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import MainContent from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, Routes } from 'react-router-dom';

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <SideBar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/dialogs/*' element={<Dialogs localState={props.appState.messagesPage} />} />
          <Route path='/profile' element={<MainContent localState={props.appState.profilePage} addPost={props.addPost} addNewText={props.addNewText}/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
