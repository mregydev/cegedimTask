import React, { useState } from 'react'
import { FormattedMessage } from 'react-intl'
import { MenuItem } from './MenuItem'
import styles from './styles.module.scss'
import classNames from 'classnames'
import { menuItems } from './items'
import { Menu } from '@material-ui/icons';

interface SideMenu {
    titlelabelId: string,
    className?: string,
    selectedIndex:number
}

export default (props: SideMenu) => {
    const { titlelabelId, className } = props
    const [selectedIndex, setSelectedIndex] = useState(props.selectedIndex)
    const [isCollapsed, setIsCollapsed] = useState(false)

    return <div className={classNames({ [styles['menu-container']]: true, [className]: true, [styles['menu-collapsed']]: isCollapsed })}>
        <div className={styles['header-section']}>
            <div className={styles['title']}>
                <FormattedMessage id={titlelabelId} />
            </div>

            <div className={styles['menu-icon']}>
                <Menu onClick={() => setIsCollapsed(!isCollapsed)} />
            </div>
        </div>
        <div className={styles['menu-items']}>
            <ul className={styles['parent-list']}>
                {
                    menuItems.map((item, index) => <MenuItem onClick={() => setSelectedIndex(index)} isSelected={index === selectedIndex} key={`p${index}`} labelId={item.labelId} path={item.path} children={item.children} />)
                }
            </ul>
        </div>
    </div>

}