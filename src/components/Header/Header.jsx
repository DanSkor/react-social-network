import React from 'react';
import logo from '../../img/logo.png';
import style from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    // console.log(props)
    return (
        <header className={style.header}>
            <img src={logo} width='40px' height='40px' alt='logo' />
            <h4>
                {props.isAuth 
                ? <div className={style.wrapper}>{props.login} <button className={style.button} onClick={props.logout}>LogOut</button></div>
                : <NavLink to='/login/'>LogIn</NavLink>}
            </h4>
        </header>
    )
}

export default Header;
