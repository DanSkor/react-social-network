import React from 'react';
import style from './MessageOut.module.css';


const MessageOut = (props) => {
    return (
       <div className={style.item}>
            <span>{props.message}</span>
       </div>
    )
}

export default MessageOut;
