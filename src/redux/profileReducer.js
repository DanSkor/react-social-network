import me from '../img/me.webp';
import avatar from '../img/ava.jpg';
import hren from '../img/hren.png';
import gandalf from '../img/gandalf.jpg';

const ADD_POST = 'ADD-POST';
const UPDATE_INPUT_PROFILE = 'UPDATE-INPUT-PROFILE';

let initialState = {
    postsData: [
        {id: 1, name: 'Ivan Petrov', comment: 'Hello my friends!', likesCount: 6, image: avatar},
        {id: 2, name: 'Hren s Gory', comment: 'Hell yeahh', likesCount: 52, image: hren},
        {id: 3, name: 'Gandalf', comment: 'You will not pass!', likesCount: 686, image: gandalf},
    ],
    inputTextValue: '',
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            let newMessage = {
                id: state.postsData.length++,
                name: 'Me',
                comment: state.inputTextValue,
                likesCount: 0,
                image: me,
            };
            state.postsData.push(newMessage);
            state.inputTextValue = '';
            return state;
        case UPDATE_INPUT_PROFILE:
            state.inputTextValue = action.symbols;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({
    type: ADD_POST,
})

export const updateInputProfileActionCreator = (text) => ({
    type: UPDATE_INPUT_PROFILE,
    symbols: text,
})

export default profileReducer;
