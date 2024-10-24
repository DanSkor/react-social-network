import React from 'react';
import style from './Dialogs.module.css';
import MessageOut from './MessageOut/MessageOut';
import MessageIn from './MessageIn/MessageIn';
import Dialog from './Dialog/Dialog';
import { Navigate } from 'react-router-dom';

const Dialogs = (props) => {
    // console.log(props)

    let dialogs = props.messagesPage.dialogsData.map(dialog => <Dialog name={dialog.name} id={dialog.id} key={dialog.id}/>)
    let messages = props.messagesPage.messagesData.map(message => {
        let id =  message.id.toString();
        return id.startsWith('user') ? <MessageOut message={message.message} key={message.id}/> :
                                        <MessageIn message={message.message} key={message.id}/>
    })

    let newMessage = React.createRef();

    let onButtonClick = () => {
        props.addMessage();
    }

    let onInputChange = () => {
        let text = newMessage.current.value;
        props.updateNewMessageText(text);
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
                <input className={style.input} ref={newMessage} onChange={onInputChange} value={props.messagesPage.dialogsInputValue} type='text' placeholder='Введите сообщение...'></input>
                <button className={style.button} onClick={onButtonClick}>Отправить</button>
            </div>
        </div>
       </div>
    )
}

export default Dialogs;
