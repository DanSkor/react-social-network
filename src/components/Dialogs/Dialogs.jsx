import React from 'react';
import style from './Dialogs.module.css';
import MessageOut from './MessageOut/MessageOut';
import MessageIn from './MessageIn/MessageIn';
import Dialog from './Dialog/Dialog';
import {sendMessageActionCreator, updateInputDialogsActionCreator} from '../../redux/state';

const Dialogs = (props) => {
    let dialogs = props.state.dialogsData.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>)
    let messages = props.state.messagesData.map(message => message.id === 'user' ? <MessageOut message={message.message}/> : <MessageIn message={message.message}/>)

    let newMessage = React.createRef();

    let onButtonClick = () => {
        props.dispatch(sendMessageActionCreator());
    }

    let onInputChange = () => {
        let text = newMessage.current.value;
        props.dispatch(updateInputDialogsActionCreator(text))
    } 

    return (
       <div className={style.dialogs}>
        <div className={style.dialogs_list}>
            <ul className={style.list}>
                {dialogs}
            </ul>
        </div>
        <div className={style.messages_wrapper}>
            <div className={style.messages}>
                {messages}
            </div>
            <div className={style.input_wrapper}>
                <input className={style.input} ref={newMessage} onChange={onInputChange} value={props.state.dialogsInputValue} type='text' placeholder='Введите сообщение...'></input>
                <button className={style.button} onClick={onButtonClick}>Отправить</button>
            </div>
        </div>
       </div>
    )
}

export default Dialogs;
