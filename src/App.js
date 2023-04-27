import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import { compose } from 'redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/redux-store';
import './App.css';
import Preloader from './components/common/Preloader/Preloader';
import SideBar from './components/SideBar/SideBar';
import HeaderContainer from './components/Header/HeaderContainer';

// import DialogsContainer from './components/Dialogs/DialogsContainer';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
// import ProfileContainer from './components/Profile/ProfileContainer';
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
// import LoginContainer from './components/Login/LoginContainer';
const LoginContainer = React.lazy(() => import('./components/Login/LoginContainer'));
// import UsersContainer from './components/Users/UsersConainer';
const UsersContainer = React.lazy(() => import('./components/Users/UsersConainer'));


class App extends React.Component{

  componentDidMount() {
    this.props.initializeApp();
  } 

  render() {

      if (!this.props.initialized) {
          return <Preloader />
      }
      
      return (
        <div className="app-wrapper">
            <HeaderContainer />
            <SideBar />
            <div className='app-wrapper-content'>
              <Suspense fallback={<div><Preloader/></div>} >
                <Routes>
                      <Route path='/dialogs/*' element={<DialogsContainer/>} />
                      <Route path='/profile/:userId?' element={<ProfileContainer />} />
                      {/* мы написали вопрос, чтобы сказать, что userId - необязательный параметр */}
                      <Route path='/users' element={<UsersContainer/>} />
                      <Route path='/login' element={<LoginContainer/>} />
                  </Routes>
              </Suspense>
            </div>
        </div>
    );
  }

}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
          <Component
              {...props}
              router={{ location, navigate, params }}
          />
      );
  }

  return ComponentWithRouterProp;
}

let AppContainer = compose(withRouter, connect(mapStateToProps, {
  initializeApp
}))(App);

const SamuraiJsApp = (props) => {
  return <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
}

export default SamuraiJsApp