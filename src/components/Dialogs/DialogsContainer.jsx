import React from 'react';
import { sendMessageActionCreator } from '../../redux/messagesReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedierct } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

// const DialogsContainer = () => {
//     return (
//         <StoreContext.Consumer> 
//             {
//             (store) => {
//                 let onButtonClick = () => {
//                     store.dispatch(sendMessageActionCreator());
//                 }

//                 let onInputChange = (text) => {
//                     store.dispatch(updateInputDialogsActionCreator(text))
//                 }

//                 return <Dialogs addMessage={onButtonClick}
//                     updateNewMessageText={onInputChange}
//                     messagesPage={store.getState().messagesPage} />
//             }
//             }
//         </StoreContext.Consumer>
//     )
// }

// let AuthRedirectComponent = withAuthRedierct(Dialogs);

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (newMessage) => {
            dispatch(sendMessageActionCreator(newMessage));
        },
        }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedierct
)(Dialogs)
