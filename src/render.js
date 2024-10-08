import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost, sendMessage, updateInputProfile, updateInputDialogs} from './redux/state';


const root = ReactDOM.createRoot(document.getElementById('root'));
export const rerenderTree = (state) => {
  root.render(
    <React.StrictMode>
      <App state={state}
          addPost={addPost}
          sendMessage={sendMessage} 
          updateInputProfile={updateInputProfile}
          inputTextValue={state.profilePage.inputTextValue}
          dialogsInputValue={state.messagesPage.dialogsInputValue}
          updateInputDialogs={updateInputDialogs}/>
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
