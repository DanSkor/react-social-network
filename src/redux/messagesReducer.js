const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_INPUT_DIALOGS = 'UPDATE-INPUT-DIALOGS';

let initialState = {
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
}

const messagesReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEND_MESSAGE: 
            let text = {
                id: 'user',
                message: state.dialogsInputValue,
            }
            state.messagesData.push(text);
            state.dialogsInputValue = '';
            return state;
        case UPDATE_INPUT_DIALOGS:
            state.dialogsInputValue = action.symbols;
            return state;
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({
    type: SEND_MESSAGE,
})

export const updateInputDialogsActionCreator = (text) => ({
    type: UPDATE_INPUT_DIALOGS,
    symbols: text,
})

export default messagesReducer;
