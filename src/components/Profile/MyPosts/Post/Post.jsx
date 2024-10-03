import React from 'react';
import style from './Post.module.css';


const Post = (props) => {
    return (
        <div className={style.item}>
            <img src={props.image}></img>
            <div className={style.item_wrapper}>
                <p className={style.name}>{props.name}</p>
                <p className={style.comment}>{props.comment}</p>
            </div>
            <p className={style.count}>Comments: {props.likesCount}</p>
            <button className={style.button} type='button'>Like!</button>
        </div>
    )
}

export default Post;