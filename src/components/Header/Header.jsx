import React from 'react';
import logo from '../../img/favicon.png';
import style from './Header.module.css';

const Header = () => {
    return (
        <header className={style.header}>
            <img src={logo} width='40px' height='40px' alt='logo' />
            <h1>by Danskor</h1>
        </header>
    )
}

export default Header;
