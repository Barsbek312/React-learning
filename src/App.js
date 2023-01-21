import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { Route, Routes } from 'react-router-dom';
import UsersContainer from './components/Users/UsersConainer';
import ProfileContainer from './components/Profile/ProfileContainer';


function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <SideBar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/dialogs/*' element={<DialogsContainer/>} />
          <Route path='/profile/:userId?' element={<ProfileContainer />} />
          <Route path='/users' element={<UsersContainer/>} />x
        </Routes>
      </div>
    </div>
  );
}

export default App;
