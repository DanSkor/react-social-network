import React from 'react';
import style from './Dialog.module.css';
import { NavLink } from 'react-router-dom';


const Dialog = (props) => {
    let path = `/dialogs/${props.id}`;

    return (
        <li className={style.item}>
            <NavLink to={path} className={style.link}>{props.name}</NavLink>
        </li>
    )
}

export default Dialog;
