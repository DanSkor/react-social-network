import React from 'react';
import style from './MessageIn.module.css';


const MessageIn = (props) => {
    return (
       <div className={style.item}>
            <span>{props.message}</span>
       </div>
    )
}

export default MessageIn;
