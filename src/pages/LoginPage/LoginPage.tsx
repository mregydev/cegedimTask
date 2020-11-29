import React from 'react'

import LoginControl from '../../components/LoginControl'

import styles from './styles.module.scss'

export default (props) => {

    return <div className={styles['login-container']}>
        <div className={styles['login-description']}></div>
        <div className={styles['login-control']}><LoginControl history={props.history}/></div>
    </div>
}