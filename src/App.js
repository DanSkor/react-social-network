import React, { Component, Suspense } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import NavContainer from './components/Nav/NavContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './redux/appReducer';
import Preloader from './components/common/Preloader/Preloader';
// import DialogsContainer from './components/Dialogs/DialogsContainer';
// import ProfileContainer from './components/Profile/ProfileContainer';
const ProfileContainer = React.lazy(()=> import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
}

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className='app-wrapper'>
            <HeaderContainer />
            <NavContainer />
            <div className='app-wrapper-content'>
              <Suspense fallback={<div><Preloader /></div>}>
                <Routes>
                  <Route exact path='/profile/:userId?' element={<ProfileContainer />}/>
                  <Route path='/dialogs/*' element={<DialogsContainer />}/>
                  <Route path='/news/*' element={<News/>}/>
                  <Route path='/music/*' element={<Music/>}/>
                  <Route path='/users/*' element={<UsersContainer/>}/>
                  <Route path='/settings/*' element={<Settings/>}/>
                  <Route path='/login/*' element={<Login/>}/>
                </Routes>
              </Suspense>
            </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
})

export default connect(mapStateToProps, {initializeApp})(App);
