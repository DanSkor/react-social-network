import anonim from '../img/anonim.png';

let initialState = {
    friendsOnline: [
        {id: 33, img: anonim, title: 'Иван Петров'},
        {id: 65, img: anonim, title: 'Саша Огурцов'},
        {id: 777, img: anonim, title: 'Петька Васильев'},
        {id: 312, img: anonim, title: 'Вася Чебуреков'},
        ]
};

const navbarReducer = (state = initialState, action) => {
    return state;
}

export default navbarReducer;
