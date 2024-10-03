import React from 'react';
import style from './Music.module.css';

const Music = () => {
    return (
       <div className={style.music}>
        <h1>Turn on the music!</h1>
        <button className={style.button} type='button'>Play!</button>
       </div>
    )
}

export default Music;
