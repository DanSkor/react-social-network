import React from 'react';
import style from './Nav.module.css';
import { NavLink } from 'react-router-dom';
import FriendsOnline from './FriendsOnline/FriendsOnline';


const Nav = (props) => {
    return (
        <nav className={style.nav}>
            <ul className={style.nav__list}>
                <li>
                    <NavLink className={item => item.isActive ? `${style.active} ${style.link}` : style.link} to='/profile'>Profile</NavLink>
                </li>
                <li>
                    <NavLink className={item => item.isActive ? `${style.active} ${style.link}` : style.link} to='/dialogs'>Messages</NavLink>
                </li>
                <li>
                    <NavLink className={item => item.isActive ? `${style.active} ${style.link}` : style.link} to='/news'>News</NavLink>
                </li>
                <li>
                    <NavLink className={item => item.isActive ? `${style.active} ${style.link}` : style.link} to='/music'>Music</NavLink>
                </li>
                <li>
                    <NavLink className={item => item.isActive ? `${style.active} ${style.link}` : style.link} to='/settings'>Settings</NavLink>
                </li>
            </ul>
            <FriendsOnline friendsOnlineData={props.state.friendsOnline}/>
        </nav>
    )
}

export default Nav;