
import { createContext, useEffect, useState } from 'react';

export type UserType = {
    email: string;
    firstName: string;
    lastName: string;
    photo: string | null;
    birthDate: Date;
}
type initialType = {
    user: UserType | null
    setUser: React.Dispatch<React.SetStateAction<UserType | null>>
}
const initialState: initialType = {
    user: null,
    setUser: (() => { })
}

export const UserContext = createContext(initialState);

const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<UserType | null>(null);

    useEffect(() => {
        setUser({
            birthDate: new Date(),
            email: "john.doe@gmail.com",
            firstName: "John",
            lastName: "Doe",
            photo: null
        })
    }, [])
    return (
        <UserContext.Provider value={{
            user,
            setUser,
        }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider