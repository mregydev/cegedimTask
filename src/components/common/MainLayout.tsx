import React, { Fragment } from 'react'
import Header from '../HeaderControl'
import SideMenu from '../SideMenu'

export default ({ children }) => {

    return <Fragment>
        <Header />
        <SideMenu className="side-menu" selectedIndex={1} titlelabelId="messages.menuTitle" />
        <div className={"page-container"}>
            {children}
        </div>
    </Fragment>

}