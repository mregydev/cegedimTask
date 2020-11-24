import React from 'react'
import { IntlProvider } from 'react-intl'
import messages from '../../messages'

export default ({ children }) => {
    return <IntlProvider locale="en" messages={messages["en"]}>
        {children}
    </IntlProvider>
}