import React from "react";
import style from "./User.module.css";
import userAva from '../../../img/user-ava.jpg'

let User = (props) => {
    // console.log(props)
    return (
        <li className={style.item}>
                <div className={style.itemImage}>
                    <img className={style.image} src={props.photos.small === null ? userAva : props.photos.small}></img>
                    {props.followed ? <button className={style.buttonUnfollow} onClick={() => {props.unfollow(props.id)}} type="button">Unfollow</button> 
                                    : <button className={style.buttonFollow} onClick={() => {props.follow(props.id)}} type="button">Follow</button>}
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
