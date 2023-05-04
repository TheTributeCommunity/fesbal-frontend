import { useQuery } from '@apollo/client'
import { GET_RECIPIENT_BY_ID } from '../graphql/recipient-queries'
import { useContext } from 'react'
import { UsersContext } from '../contexts/usersContext'
import { useUserStore } from '../store/logged-user'


export const useRecipient = () => {
    const userId = useUserStore(state => state.userId)
    const result = useQuery(GET_RECIPIENT_BY_ID, {
        variables: { id: userId },
    })
    return result
}