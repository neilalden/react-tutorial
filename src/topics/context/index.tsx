import React from 'react'
import UserContextProvider from './UserContext'
import Profile from './screens/profile'

const Context = () => {
    return (
        <UserContextProvider>
            <Profile />
        </UserContextProvider>
    )
}

export default Context