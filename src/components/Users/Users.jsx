import React from "react";
import style from "./Users.module.css";
import User from "./User/User";

let Users = (props) => {
    // console.log(props)
    let users = props.users.map(user => <User id={user.id} key={user.id} followed={user.followed} name={user.name} status={user.status} location={user.location} photos={user.photos} follow={props.follow} unfollow={props.unfollow} setUsers={props.setUsers} toggleFollowingProgress={props.toggleFollowingProgress} inProgress={props.inProgress}/>);
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
        return (
            <div>
                <h2>Users</h2>
                <ul className={style.pagination}>
                    {pages.map(page => {
                        return <li><button className={props.currentPage === page ? style.buttonCurrent : style.button} onClick={() => props.onPageChanged(page)} type="button">{page}</button></li>
                    })}
                </ul>
                <ul className={style.list}>
                    {users}
                </ul>
                <button className={style.button} onClick={props.getUsers} type="button">Show more users</button>
            </div>
        )
    }

export default Users;
