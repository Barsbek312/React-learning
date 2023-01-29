import React from 'react';
import './App.css';
import SideBar from './components/SideBar/SideBar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { Route, Routes } from 'react-router-dom';
import UsersContainer from './components/Users/UsersConainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';


function App(props) {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <SideBar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/dialogs/*' element={<DialogsContainer/>} />
          <Route path='/profile/:userId?' element={<ProfileContainer />} />
          <Route path='/users' element={<UsersContainer/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
