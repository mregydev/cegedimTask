import React from 'react'
import styles from './styles.module.scss'
import header from '../../assets/logo.png'

export default ()=>{
    return <div className={styles['app-header']}> <img src={header} className={'header-img'}/> </div>
}