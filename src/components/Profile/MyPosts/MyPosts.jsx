import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let posts = props.posts.map(post => <Post name={post.name} comment={post.comment} likesCount={post.likesCount} image={post.image}/>)

    let newPost = React.createRef();

    let onButtonClick = () => {
        props.addPost();
    }

    let onInputChange = ()=> {
        let text = newPost.current.value;
        props.updateNewPostText(text)
    }

    return (
        <div>
            <h2 className={style.title}>My posts</h2>
            <div>
                <input ref={newPost} onChange={onInputChange} value={props.inputTextValue} type='text'></input>
                <button className={style.button} onClick={onButtonClick}>Add post</button>
            </div>
            <div className={style.posts}>
                {posts}
            </div>
        </div>
    )
}

export default MyPosts;