import React from "react";
import style from "./User.module.css";

let User = (props) => {
    return (
        <li className={style.item}>
                <div className={style.itemImage}>
                    <img className={style.image} src={props.image}></img>
                    <button className={style.button} type="button">Follow</button>
                </div>
                <div className={style.itemContent}>
                    <div>
                        <h3>{props.fullname}</h3>
                        <p>{props.status}</p>
                    </div>
                    <div>
                        <p>{props.location.city}, {props.location.country}</p>
                    </div>
                </div>
            </li>
    )
}

export default User;
