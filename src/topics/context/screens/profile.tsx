import React, { useContext } from 'react'
import { UserContext } from '../UserContext'

const Profile = () => {
    const {
        user,
        setUser
    } = useContext(UserContext);

    if (!user) return <></>
    return (
        <div>
            <h1>{user.firstName} {user.lastName}</h1>
        </div>
    )
}


export default Profile