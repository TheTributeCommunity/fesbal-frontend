import { useContext, useEffect, useState } from 'react'
import { Recipient } from '../models/recipient-user'
import { RecipientUserService } from '../services/recipient-user-service'
import { Relative } from '../models/relative'
import { UsersContext } from '../contexts/usersContext'
import { useSubscription } from '@apollo/client'
import { RelativeService } from '../services/relative-service'
import { SUBSCRIBE_TO_RECIPIENT_USER } from '../graphql/recipient-queries'

const useRecipientAndRelatives = (recipientUserId?: string) => {
    const [familyMembers, setFamilyMembers] = useState<Relative[]>([])
    const [user, setUser] = useState<Recipient>()
    const [loading, setLoading] = useState(true)
    const { firebaseUser } = useContext(UsersContext)
    const [userId, setUserId] = useState(recipientUserId ?? firebaseUser?.uid)

    useEffect(() => {
        setUserId(recipientUserId ?? firebaseUser?.uid)
    }, [firebaseUser])
    
    useSubscription(SUBSCRIBE_TO_RECIPIENT_USER,
        {
            variables: { id: userId ?? '' },
            skip: userId ? false : true,
            onSubscriptionData: ({ subscriptionData }) => {
                const recipient = subscriptionData.data.RecipientReadModel as Recipient
                setUser(recipient)
                recipient.relativesIds && userId && RelativeService.getAllByRecipientUserId(userId)
                    .then(relatives => setFamilyMembers(relatives))
            }
        })

        useEffect(() => {
            if (!userId) return;
          
            RecipientUserService.getUserById(userId)
              .then(async (recipientUser) => {
                setUser(recipientUser);
          
                if (recipientUser.relativesIds) {
                  const relatives = await RelativeService.getAllByRecipientUserId(userId);
                  setFamilyMembers(relatives);
                }
              })
              .catch(console.log)
              .finally(() => setLoading(false));
          
          }, [userId]);

    return {
        user,
        familyMembers,
        loading,
        setFamilyMembers
    }
}

export default useRecipientAndRelatives
