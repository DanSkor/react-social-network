import React from 'react';
import { addPostActionCreator, updateInputProfileActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

// const MyPostsContainer = () => {
//     return (
//         <StoreContext.Consumer> 
//             {
//             (store) => {
//                 let onButtonClick = () => {
//                     store.dispatch(addPostActionCreator());
//                 }

//                 let onInputChange = (text) => {
//                     store.dispatch(updateInputProfileActionCreator(text));
//                 }
//                 return <MyPosts updateNewPostText={onInputChange}
//                     addPost={onButtonClick}
//                     posts={store.getState().profilePage.postsData}
//                     inputTextValue={store.getState().profilePage.inputTextValue} />
//             }
//         }
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postsData,
        inputTextValue: state.profilePage.inputTextValue
    }
}

let mapDispatchToProps = (dispatch) => {
   return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updateNewPostText: (text) => {
            dispatch(updateInputProfileActionCreator(text));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
