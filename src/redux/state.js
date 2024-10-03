import avatar from '../img/ava.jpg';
import hren from '../img/hren.png';
import gandalf from '../img/gandalf.jpg';
import anonim from '../img/anonim.png';
import me from '../img/me.webp';

const ADD_POST = 'ADD-POST';
const UPDATE_INPUT_PROFILE = 'UPDATE-INPUT-PROFILE';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_INPUT_DIALOGS = 'UPDATE-INPUT-DIALOGS';

let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, name: 'Ivan Petrov', comment: 'Hello my friends!', likesCount: 6, image: avatar},
                {id: 2, name: 'Hren s Gory', comment: 'Hell yeahh', likesCount: 52, image: hren},
                {id: 3, name: 'Gandalf', comment: 'You will not pass!', likesCount: 686, image: gandalf},
            ],
            inputTextValue: '',
        },
        messagesPage: {
            dialogsData: [
                {id: 1, name: 'Misha'},
                {id: 2, name: 'Stesha'},
                {id: 3, name: 'Petr'},
            ],
            messagesData: [
                {id: 1, message: 'Hi!'},
                {id: 'user', message: 'Hello my friend!'},
                {id: 3, message: 'I have greate news for you!'},
                {id: 'user', message: 'Im hear you!!!'},
                ],
            dialogsInputValue: '',
        },
        navBar: {
            friendsOnline: [
                {img: anonim, title: 'Иван Петров'},
                {img: anonim, title: 'Саша Огурцов'},
                {img: anonim, title: 'Петька Васильев'},
                {img: anonim, title: 'Вася Чебуреков'},
                ]
        },
    },
    _callSubscriber () {
        console.log('hi')
    },

    getState () {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch (action) {
        if (action.type === 'ADD-POST') {
            let newMessage = {
                id: this._state.profilePage.postsData.length++,
                name: 'Me',
                comment: this._state.profilePage.inputTextValue,
                likesCount: 0,
                image: me,
            };
            this._state.profilePage.postsData.push(newMessage);
            this._state.profilePage.inputTextValue = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'SEND-MESSAGE') {
            let text = {
                id: 'user',
                message: this._state.messagesPage.dialogsInputValue,
            }
            this._state.messagesPage.messagesData.push(text);
            this._state.messagesPage.dialogsInputValue = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-INPUT-PROFILE') {
            this._state.profilePage.inputTextValue = action.symbols;
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-INPUT-DIALOGS') {
            this._state.messagesPage.dialogsInputValue = action.symbols;
            this._callSubscriber(this._state);
        }
    },
}

export const addPostActionCreator = () => ({
        type: ADD_POST,
    })

export const updateInputProfileActionCreator = (text) => ({
        type: UPDATE_INPUT_PROFILE,
        symbols: text,
    })

export const sendMessageActionCreator = () => ({
        type: SEND_MESSAGE,
    })
    
export const updateInputDialogsActionCreator = (text) => ({
        type: UPDATE_INPUT_DIALOGS,
        symbols: text,
    })

export default store;
