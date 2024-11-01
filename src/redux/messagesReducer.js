const SEND_MESSAGE = 'SEND-MESSAGE';
// const UPDATE_INPUT_DIALOGS = 'UPDATE-INPUT-DIALOGS';

let initialState = {
    dialogsData: [
        {id: 1, name: 'Misha'},
        {id: 2, name: 'Stesha'},
        {id: 3, name: 'Petr'},
    ],
    messagesData: [
        {id: 1, message: 'Hi!'},
        {id: 'user/1', message: 'Hello my friend!'},
        {id: 2, message: 'I have greate news for you!'},
        {id: 'user/2', message: 'Im hear you!!!'},
        ],
    // dialogsInputValue: '',
}

const messagesReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEND_MESSAGE: {
            return {
                ...state,
                // dialogsInputValue: '',
                messagesData: [...state.messagesData, {id: 'user/3', message: action.newMessage} ]
            }
            // let stateCopy = Object.assign({}, state)
            // stateCopy.messagesData.push(text);
            // stateCopy.dialogsInputValue = '';
        }
        // case UPDATE_INPUT_DIALOGS: {
        //     return {
        //         ...state,
        //         dialogsInputValue: action.symbols,
        //     }
        //     // stateCopy.dialogsInputValue = action.symbols;
        //     // return stateCopy;
        // }
        default:
            return state;
            
    }
}

export const sendMessageActionCreator = (newMessage) => ({
    type: SEND_MESSAGE,
    newMessage
})

// export const updateInputDialogsActionCreator = (text) => ({
//     type: UPDATE_INPUT_DIALOGS,
//     symbols: text,
// })

export default messagesReducer;
