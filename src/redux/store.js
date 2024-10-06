import avatar from '../img/ava.jpg';
import hren from '../img/hren.png';
import gandalf from '../img/gandalf.jpg';
import anonim from '../img/anonim.png';
import profileReducer from './profileReducer';
import messagesReducer from './messagesReducer';
import navbarReducer from './navbarReducer';

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
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action)
        this._state.navBar = navbarReducer(this._state.navBar, action)

        this._callSubscriber(this._state);
    },
}

export default store;
