import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavContainer from './components/Nav/NavContainer';

const App = (props) => {
  // console.log(props)
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
          <Header />
          <NavContainer />
          <div className='app-wrapper-content'>
          <Routes>
            <Route index path='/profile/*' element={<Profile />}/>
            <Route path='/dialogs/*' element={<DialogsContainer />}/>
            <Route path='/news/*' element={<News/>}/>
            <Route path='/music/*' element={<Music/>}/>
            <Route path='/settings/*' element={<Settings/>}/>
          </Routes>
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
