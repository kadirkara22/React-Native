import React from 'react'
import Router from './Router'
import UserInfoContextProvider from './context/UserInfoContext'
import BookContextProvider from './context/BookContext'
import WallPageContextProvider from './context/WallPageContext'


export default () => {
    return (
        <UserInfoContextProvider>
            <WallPageContextProvider>
                <BookContextProvider>
                    <Router />
                </BookContextProvider>
            </WallPageContextProvider>
        </UserInfoContextProvider>
    )
}