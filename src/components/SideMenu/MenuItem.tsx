import React, { MouseEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.scss'
import { FormattedMessage } from 'react-intl'
import classNames from 'classnames'

export interface MenuItemProps {
    labelId: string,
    path?: string,
    children?: Array<MenuItemProps>
    key?: string,
    onClick?: (event: MouseEvent<HTMLAnchorElement>) => void,
    isSelected?: Boolean,
    selectedClassName?: string
}

export const MenuItem = (props: MenuItemProps) => {
    const { key, labelId, path, children, onClick, isSelected, selectedClassName } = props

    const [selectedIndex, setSelectedIndex] = useState(-1)

    const Children=()=>children && children.length?<ul className={styles['child-list']}>{children.map((ch,index)=><MenuItem labelId={ch.labelId}  path={ch.path} key={`c${index}`} isSelected={selectedIndex===index} selectedClassName={'child-selected'} onClick={()=>setSelectedIndex(index)} /> )}</ul>:null

    return <li  key={key}><span className={classNames({ [styles['menu-item']]: true, [styles[selectedClassName || 'menu-item-selected']]: isSelected })}><Link  to={path} onClick={onClick}><FormattedMessage id={labelId} /></Link></span>
        <Children/>
    </li>
}