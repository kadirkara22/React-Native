import React from 'react'
import Router from './Router'
import UserInfoContextProvider from './context/UserInfoContext'

export default () => {
    return (
        <UserInfoContextProvider>
            <Router />
        </UserInfoContextProvider>
    )
}

