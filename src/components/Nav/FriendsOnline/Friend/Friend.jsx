import React from 'react';
import style from './Friend.module.css';

let Friend = (props) => {
    return (
      <li className={style.item}>
        <img src={props.src} className={style.img}></img>
        <h5 className={style.title}>{props.title}</h5>
      </li>
    )
}

export default Friend;
