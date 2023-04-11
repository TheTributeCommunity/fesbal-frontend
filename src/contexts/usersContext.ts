import { User } from 'firebase/auth'
import { createContext } from 'react'

export interface UsersContextInterface {
    loggedUserType: string | undefined
    firebaseUser: User | undefined
}

export const UsersContext = createContext<UsersContextInterface>({
    loggedUserType: undefined,
    firebaseUser: undefined
})