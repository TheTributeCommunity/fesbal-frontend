import { User } from 'firebase/auth'
import { createContext } from 'react'
import Notification from '../types/Notification'
import { PickupWithItems } from '../types/Pickup'

export interface UsersContextInterface {
    loggedUserType: string | undefined
    firebaseUser: User | undefined
    notifications: Notification[] | undefined
    pickupToSign: PickupWithItems | undefined
}

export const UsersContext = createContext<UsersContextInterface>({
    loggedUserType: undefined,
    firebaseUser: undefined,
    notifications: undefined,
    pickupToSign: undefined,
})