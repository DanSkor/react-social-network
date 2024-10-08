import React from 'react';
import style from './FriendsOnline.module.css';
import Friend from './Friend/Friend';

let FriendsOnline = (props) => {
    // console.log(props)
    let friends = props.friendsOnlineData.map(item => <Friend src={item.img} title={item.title} key={item.id}/>)

    return (
        <div className={style.block}>
            <h4 className={style.title}>Now online:</h4>
            <ul className={style.list}>
                {friends}
            </ul>
        </div>
    )
}

export default FriendsOnline;
