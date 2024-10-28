import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import loginFormSchema from '../FormValidation/LoginFormSchema';
import style from './Login.module.css';

const LoginForm = (props) => {
    return (
        <Formik initialValues={{email: '', password: '', rememberMe: false}}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (!/^[A-Z0-9._%+=]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                    errors.email = 'invalid email address';
                }
                return errors;
            }}
            validationSchema={loginFormSchema}>

            {() => (
               <Form className={style.form}>
                    <div>
                        <Field className={style.input} type="text" name={'email'} placeholder={'email'}/>
                        <ErrorMessage name='email' component='div'/>
                    </div>
                    <div>
                        <Field className={style.input} type="password" name={'password'} placeholder={'password'}/>
                        <ErrorMessage name='password' component='div'/>
                    </div>
                    <div className={style.checkboxWrapper}>
                        <Field type="checkbox" name={'rememberMe'} placeholder={'password'}/>
                        <label htmlFor="rememberMe"> remember me</label>
                    </div>
                    <button className={style.button} type='submit'>Login</button>
               </Form> 
            )}

            {/* <form className={style.form}>
                <input className={style.input} type="text" placeholder='Login' />
                <input className={style.input} type="text" placeholder='Password' />
                <div className={style.checkboxWrapper}>
                    <input type="checkbox" id='remember'/>
                    <label htmlFor="remember"> remember me</label>
                </div>
                <button className={style.button} type='submit'>Login</button>
            </form> */}
        </Formik>
    )
}

const Login = (props) => {
    return (
        <div>
        <h3>Hello! Please enter your login and password!</h3>
        <LoginForm />
        </div>
    )
}

export default Login;
