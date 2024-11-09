import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, Form, Formik } from 'formik';

const MyPostsForm = (props) => {
    // console.log(props)
    // let newPost = React.createRef();

    return (
        <Formik 
        initialValues={{newPostText: ''}}
        onSubmit={values => {
            props.addPost(values.newPostText);
        }}
        validate={values => {
            const errors = {};
            if (!values.newPostText) {
                errors.newPostText = 'Required';
            }
            return errors;
        }}>

        {() => (
            <Form>
                <Field name={'newPostText'} type='text'></Field>
                <button className={style.button} type='submit'>Add post</button>
            </Form>
        )}
        </Formik>
    )
}


const MyPosts = React.memo((props) => {
    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextProps !== this.props || nextState !== this.state;
    // классовый метод
    // }

    let posts = props.posts.map(post => <Post name={post.name} comment={post.comment} likesCount={post.likesCount} image={post.image} key={post.id}/>)

    return (
        <div>
            <h2 className={style.title}>My posts</h2>
            <MyPostsForm addPost={props.addPost}/>
            <div className={style.posts}>
                {posts}
            </div>
        </div>
    )
})

export default MyPosts;