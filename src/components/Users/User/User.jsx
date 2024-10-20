import React from "react";
import style from "./User.module.css";
import userAva from '../../../img/user-ava.jpg'
import { NavLink } from "react-router-dom";

let User = (props) => {

    return (
        <li className={style.item}>
                <div className={style.itemImage}>
                    <NavLink to={'/profile/' + props.id}>
                        <img className={style.image} src={props.photos.small === null ? userAva : props.photos.small}></img>
                    </NavLink>
                    {props.followed ? <button className={style.buttonUnfollow} disabled={props.inProgress.some(id => id === props.id)}
                                    onClick={() => {
                                        
                                        props.unfollow(props.id)

                                        // props.toggleFollowingProgress(true, props.id);
                                        // getUnfollow(props.id).then(data => {
                                        //     if (data.resultCode === 0) {
                                        //         props.unfollow(props.id)
                                        //     }
                                        //     props.toggleFollowingProgress(false, props.id);
                                        // })

                                    }} type="button">Unfollow</button>
                                    : <button className={style.buttonFollow} disabled={props.inProgress.some(id => id === props.id)}
                                    onClick={() => {

                                        props.follow(props.id);
                                        
                                        // props.toggleFollowingProgress(true, props.id);
                                        // getFollow(props.id).then(data => {
                                        //     if (data.resultCode === 0) {
                                        //          props.follow(props.id)
                                        //         }
                                        //     props.toggleFollowingProgress(false, props.id);
                                        // })

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
