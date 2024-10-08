import React from "react";
import style from "./Users.module.css";
import User from "./User/User";

let Users = (props) => {
    console.log(props)
    let users = props.users.map(user => <User id={user.id} isFollow={user.isFollow} fullname={user.fullname} status={user.status} location={user.location} image={user.image}/>)
    return (
        <div>
            <h2>Users</h2>
            <ul className={style.list}>
                {users}
            </ul>
        </div>
    )
}

export default Users;
