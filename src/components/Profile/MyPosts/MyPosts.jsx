import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateInputProfileActionCreator} from '../../../redux/state';

const MyPosts = (props) => {
    let posts = props.state.postsData.map(post => <Post name={post.name} comment={post.comment} likesCount={post.likesCount} image={post.image}/>)

    let newPost = React.createRef();

    let onButtonClick = () => {
        props.dispatch(addPostActionCreator());
    }

    let onInputChange = ()=> {
        let text = newPost.current.value;
        props.dispatch(updateInputProfileActionCreator(text));
    }

    return (
        <div>
            <h2 className={style.title}>My posts</h2>
            <div>
                <input ref={newPost} onChange={onInputChange} value={props.state.inputTextValue} type='text'></input>
                <button className={style.button} onClick={onButtonClick}>Add post</button>
            </div>
            <div className={style.posts}>
                {posts}
            </div>
        </div>
    )
}

export default MyPosts;