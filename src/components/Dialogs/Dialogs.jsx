import React from 'react';
import style from './Dialogs.module.css';
import MessageOut from './MessageOut/MessageOut';
import MessageIn from './MessageIn/MessageIn';
import Dialog from './Dialog/Dialog';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const DialogsForm = (props) => {
    // let newMessage = React.createRef();
    return (
        <Formik 
        initialValues={{newMessage: ''}}
        onSubmit={values => {
            props.addMessage(values.newMessage);
        }}
        validate={values => {
            const errors = {};
            if (!values.newMessage) {
                errors.newMessage = 'Required';
            }
            return errors;
        }}>

        {() => (
            <Form className={style.input_wrapper}>
                <Field className={style.input} name={'newMessage'} type='text' placeholder='Введите сообщение...'></Field>
                <button className={style.button} type='submit'>Отправить</button>
            </Form>
        )}
    </Formik>
    )
}

const Dialogs = (props) => {
    // console.log(props)

    let dialogs = props.messagesPage.dialogsData.map(dialog => <Dialog name={dialog.name} id={dialog.id} key={dialog.id}/>)
    let messages = props.messagesPage.messagesData.map(message => {
        let id =  message.id.toString();
        return id.startsWith('user') ? <MessageOut message={message.message} key={message.id}/> :
                                        <MessageIn message={message.message} key={message.id}/>
    })

    // let onButtonClick = (values) => {
    //     props.addMessage(values.newMessage);
    // }

    // let onInputChange = () => {
    //     let text = newMessage.current.value;
    //     props.updateNewMessageText(text);
    // }

    return (
        <div className={style.dialogs}>
        <div className={style.dialogs_list}>
            <ul className={style.list}>
                {dialogs}
            </ul>
        </div>
            <div className={style.messages_wrapper}>
                <div className={style.messages}>
                    {messages}
                </div>
                <DialogsForm addMessage={props.addMessage}/>
            </div>
        </div>
    )
}

export default Dialogs;
