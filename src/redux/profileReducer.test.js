import profileReducer, { addPostActionCreator, deletePost } from "./profileReducer";
import React from "react";

let state = {
    postsData: [
        {id: 1, name: 'Ivan Petrov', comment: 'Hello my friends!', likesCount: 6},
        {id: 2, name: 'Hren s Gory', comment: 'Hell yeahh', likesCount: 52},
        {id: 3, name: 'Gandalf', comment: 'You will not pass!', likesCount: 686},
    ]
}

test('length of posts should be incremented', () => {
    let action = addPostActionCreator('First test');

    let newState = profileReducer(state, action)

    expect(newState.postsData.length).toBe(4);
});

test('message of post should be correct', () => {
    let action = addPostActionCreator('First test');

    let newState = profileReducer(state, action)

    expect(newState.postsData[3].comment).toBe('First test');
});

test('after deleting length of messages should be decrement', () => {
    let action = deletePost(1);

    let newState = profileReducer(state, action)

    expect(newState.postsData.length).toBe(2);
});