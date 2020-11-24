import React, { useState } from 'react'
import { FormattedMessage } from 'react-intl'


import header from '../../assets/logo.png'
import styles from './styles.module.scss'
import { Redirect } from "react-router-dom";

interface LoginControlProps {

}

export default (props: LoginControlProps = {}) => {
    console.log(props)

    const [hasUserNameError, setHasUserNameError ] = useState(false)

    const [ haspasswordError, setHasPasswordError ] = useState(false)
    

    const login = () => {

        setHasPasswordError(false)
        setHasUserNameError(false)

        if (!document.getElementById("email")["value"]) {
            setHasUserNameError(true)
        }


        else if (!document.getElementById("password")["value"]) {
            setHasPasswordError(true)
        }

        else {
           
            debugger
            sessionStorage['accessToken'] = 'lolo';
            
           sessionStorage['canRedirect']=true
           
        }
    }

    return sessionStorage['canRedirect']?<Redirect to='/'></Redirect> : <div className={styles['login-container']}>
        <div className={styles['logo']}>
            <img src={header} />
        </div>

        <div className={styles['login-note']}> <span className={styles['login-word']}><FormattedMessage id='messages.login'></FormattedMessage></span> <FormattedMessage id='messages.loginNote'></FormattedMessage></div>
        <form onSubmit={() => { return login(); }} className={styles['login-form']}>
            <input type='text' className={hasUserNameError?styles['error']:''} id="email" placeholder='username' />
            <input type='password' className={haspasswordError?styles['error']:''} id="password" placeholder='password' />
            <input type='submit' value='Login' />
        </form>
    </div>
}