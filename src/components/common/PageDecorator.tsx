import React, {  Fragment } from 'react'
import Header from '../HeaderControl'
import SideMenu from '../SideMenu'

export default (props) => {
    debugger
    return <Fragment>
        <Header />
        <SideMenu className="side-menu" selectedIndex={1} titlelabelId="messages.menuTitle" />
        {props.children}
    </Fragment>
}