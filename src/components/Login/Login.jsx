import React from 'react';
import classNames from 'classnames';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import loginFormSchema from '../FormValidation/LoginFormSchema';
import style from './Login.module.css';
import { connect } from 'react-redux';
import { login } from '../../redux/authReducer';
import { NavLink } from 'react-router-dom';

function validateEmail(values) {
    if (!values) {
        return 'Required';
    } else if (!/^[A-Z0-9._%+=]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values)) {
        return 'invalid email address';
    }  
}

function validatePassword(values) {
    if (!/^(?=^.{8,}$)/i.test(values)) {
        return 'minimum 8 characters, one number, one uppercase letter and one in saved form';
    } 
}

const LoginForm = (props) => {
    return (
        <Formik 
            initialValues={{email: '', password: '', rememberMe: false}}
            onSubmit={(values) => {
                console.log(values)
                props.login(values.email, values.password, values.rememberMe)
            }}
            // validateEmail={values => {
            //     const errors = {};
            //     if (!values.email) {
            //         errors.email = 'Required';
            //     } else if (!/^[A-Z0-9._%+=]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            //         errors.email = 'invalid email address';
            //     } else if (/^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/i.test(values.password)) {
            //         errors.password = 'You must to use one big character';
            //     } 
            //     return errors;
            // }}
            validationSchema={loginFormSchema}>

            {(formik) => (
                <Form className={style.form}>
                    <div className={style.inputWrapper}>
                        <Field className={classNames(
                            style.input, {[style.inputError]: formik.errors.email && formik.touched.email}
                        )} type="text" name='email' placeholder={'email'} validate={validateEmail}/>
                        <ErrorMessage className={style.error} name='email' component='div'/>
                    </div>
                    <div className={style.inputWrapper}>
                        <Field className={classNames(
                            style.input, {[style.inputError]: formik.errors.password && formik.touched.password}
                        )} type="password" name={'password'} placeholder={'password'} validate={validatePassword}/>
                        <ErrorMessage className={style.error} name='password' component='div'/>
                    </div>
                    <div className={style.checkboxWrapper}>
                        <Field type="checkbox" name={'rememberMe'} id={'rememberMe'} placeholder={'password'}/>
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
    if (props.isAuth) {
        return <NavLink to='/profile/' />
    }

    return (
        <div>
        <h3>Hello! Please enter your login and password!</h3>
        <LoginForm login={props.login}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);
