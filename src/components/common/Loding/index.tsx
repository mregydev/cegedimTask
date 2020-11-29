import React from 'react'
import styles from './styles.module.scss'
import loadingImg from '../../../assets/loading.gif'

export interface LoadingProps {
    isShown: Boolean
}


export default (props: LoadingProps) => {
    return props.isShown ? <div className={styles['loading-container']}><img src={loadingImg} className={styles['loading-img']} /></div> : null
}