import React from "react";
import style from "./Users.module.css";
import User from "./User/User";
import Paginator from "../common/Paginator/Paginator";

let Users = (props) => {
    let users = props.users.map(user => <User id={user.id} key={user.id} followed={user.followed} name={user.name} status={user.status} location={user.location} photos={user.photos} follow={props.follow} unfollow={props.unfollow} setUsers={props.setUsers} toggleFollowingProgress={props.toggleFollowingProgress} inProgress={props.inProgress}/>);

        return (
            <div>
                <h2>Users</h2>
                <Paginator totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} currentPage={props.currentPage} onPageChanged={props.onPageChanged}/>
                <ul className={style.list}>
                    {users}
                </ul>
                <button className={style.button} onClick={props.getUsers} type="button">Show more users</button>
            </div>
        )
    }

export default Users;
