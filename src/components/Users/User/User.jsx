import React from "react";
import style from "./User.module.css";
import userAva from '../../../img/user-ava.jpg'
import { NavLink } from "react-router-dom";
import axios from "axios";
import { getFollow, getUnfollow } from "../../../api/api";

let User = (props) => {
    console.log(props)
    return (
        <li className={style.item}>
                <div className={style.itemImage}>
                    <NavLink to={'/profile/' + props.id}>
                        <img className={style.image} src={props.photos.small === null ? userAva : props.photos.small}></img>
                    </NavLink>
                    {props.followed ? <button className={style.buttonUnfollow} disabled={props.inProgress}
                                    onClick={() => {
                                        
                                        props.toggleFollowingProgress(true);
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {withCredentials: true, headers: {'API-KEY': '55bc9523-1d91-4584-a2d8-afd097d20a45'}})
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unfollow(props.id)
                                            }
                                            props.toggleFollowingProgress(false);
                                        })
                                       

                                        // getUnfollow(props.id).then(response => {
                                        //     console.log(response)
                                        //     if (response.data.resultCode === 0) {
                                        //         props.unfollow(props.id)
                                        //     }
                                        // })
                                    }} type="button">Unfollow</button>
                                    : <button className={style.buttonFollow} disabled={props.inProgress}
                                    onClick={() => {
                                        
                                        // getFollow(props.id).then(response => {
                                        //     if (response.data.resultCode === 0) {
                                        //          props.follow(props.id)
                                        //         }
                                        // })
                                        
                                        props.toggleFollowingProgress(true);
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {}, {withCredentials: true, headers: {'API-KEY': '55bc9523-1d91-4584-a2d8-afd097d20a45'}})
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(props.id)
                                            }
                                            props.toggleFollowingProgress(false);
                                        })
                                    }} type="button">Follow</button>}
                </div>
                <div className={style.itemContent}>
                    <div>
                        <h3>{props.name}</h3>
                        <p>{props.status}</p>
                    </div>
                    <div>
                        {/* <p>{props.location.city}, {props.location.country}</p> */}
                        Moscow, Russia
                    </div>
                </div>
            </li>
    )
}

export default User;
