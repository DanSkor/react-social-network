import React from "react";
import style from "./Users.module.css";
import User from "./User/User";
import axios from "axios";

// let Users = (props) => {
//     let getUsers = () => {
//         if (props.users.length === 0) {
//             axios.get('https://social-network.samuraijs.com/api/1.0/users')
//                 .then(response => {
//                     props.setUsers(response.data.items)
//                 })
//         }
//     }

//     let users = props.users.map(user => <User id={user.id} followed={user.followed} name={user.name} status={user.status} location={user.location} photos={user.photos} follow={props.follow} unfollow={props.unfollow} setUsers={props.setUsers}/>)
//     return (
//         <div>
//             <h2>Users</h2>
//             <ul className={style.list}>
//                 {users}
//             </ul>
//             <button className={style.button} onClick={getUsers} type="button">Show more users</button>
//         </div>
//     )
// }

class Users extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    users = this.props.users.map(user => <User id={user.id} key={user.id} followed={user.followed} name={user.name} status={user.status} location={user.location} photos={user.photos} follow={this.props.follow} unfollow={this.props.unfollow} setUsers={this.props.setUsers} />)
    render() {
        return (
            <div>
                <h2>Users</h2>
                <ul className={style.list}>
                    {this.users}
                </ul>
                <button className={style.button} onClick={this.getUsers} type="button">Show more users</button>
            </div>
        )
    }
}

export default Users;
