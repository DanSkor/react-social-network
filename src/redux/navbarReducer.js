import anonim from '../img/anonim.png';

let initialState = {
    friendsOnline: [
        {img: anonim, title: 'Иван Петров'},
        {img: anonim, title: 'Саша Огурцов'},
        {img: anonim, title: 'Петька Васильев'},
        {img: anonim, title: 'Вася Чебуреков'},
        ]
};

const navbarReducer = (state = initialState, action) => {
    return state;
}

export default navbarReducer;
