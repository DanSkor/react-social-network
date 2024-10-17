import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavContainer from './components/Nav/NavContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const App = (props) => {
  // console.log(props)
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
          <HeaderContainer />
          <NavContainer />
          <div className='app-wrapper-content'>
          <Routes>
            <Route index path='/profile/:userId?' element={<ProfileContainer />}/>
            <Route path='/dialogs/*' element={<DialogsContainer />}/>
            <Route path='/news/*' element={<News/>}/>
            <Route path='/music/*' element={<Music/>}/>
            <Route path='/users/*' element={<UsersContainer/>}/>
            <Route path='/settings/*' element={<Settings/>}/>
          </Routes>
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
