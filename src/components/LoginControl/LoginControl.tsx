import React, { useEffect, useState } from 'react'
import { FormattedMessage } from 'react-intl'
import Loading from '../common/Loding'

import header from '../../assets/logo.png'
import styles from './styles.module.scss'
import { USERCREDENTIALS } from 'actions/userActions/types'

interface LoginControlProps {
    history: any,
    isLoading: Boolean,
    isLoginValid: Boolean,
    isLoginNotValid: Boolean,
    ApplyLogin: (credentials: USERCREDENTIALS) => void,
    errorMessage: string
}

export default (props: LoginControlProps) => {


    const [hasUserNameError, setHasUserNameError] = useState(false)

    const [haspasswordError, setHasPasswordError] = useState(false)

    const [userName, setUserName] = useState("")

    const [password, setpassword] = useState("")

    const login = () => {

        setHasPasswordError(false)

        setHasUserNameError(false)

        if (!userName) {
            setHasUserNameError(true)
        }
        else if (!password) {
            setHasPasswordError(true)
        }
        else {
            props.ApplyLogin({ userName, password })
        }
    }


    useEffect(() => {
        if (props.errorMessage) {
            alert(props.errorMessage)
        }
    }, [props.errorMessage])



    useEffect(() => {
        
        debugger

        if (props.isLoginValid) {
            props.history.push("/layout")
        }
        else if (props.isLoginNotValid) {
            alert("invalid credentials")
        }
    }, [props.isLoginNotValid, props.isLoginValid])


    return <div className={styles['login-container']}>
        <Loading isShown={props.isLoading} />

        <div className={styles['logo']}>
            <img src={header} />
        </div>

        <div className={styles['login-note']}> <span className={styles['login-word']}><FormattedMessage id='messages.login'></FormattedMessage></span> <FormattedMessage id='messages.loginNote'></FormattedMessage></div>
        <form onSubmit={(evt) => { evt.preventDefault(); return login(); }} className={styles['login-form']}>
            <input type='text' onChange={(event) => setUserName(event.target.value)} className={hasUserNameError ? styles['error'] : ''} id="email" placeholder='username' />
            <input type='password' onChange={(event) => setpassword(event.target.value)} className={haspasswordError ? styles['error'] : ''} id="password" placeholder='password' />
            <input type='submit' value='Login' />
        </form>
    </div>
}