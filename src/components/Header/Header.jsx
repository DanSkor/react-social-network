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
                {props.isAuth ? props.login : <NavLink to='/login/'>Log In</NavLink>}
            </h4>
        </header>
    )
}

export default Header;
