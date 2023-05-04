import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Recipient } from '../models/recipient-user'
import { RecipientUserService } from '../services/recipient-user-service'
import { Relative } from '../models/relative'
import { AppRoute } from '../enums/app-route'
import { UsersContext } from '../contexts/usersContext'
import { useSubscription } from '@apollo/client'
import { RelativeService } from '../services/relative-service'
import { SUBSCRIBE_TO_RECIPIENT_USER } from '../graphql/recipient-queries'
import { useUserStore } from '../store/logged-user'

const useRegisterFamilyMembers = () => {
    const [familyMembers, setFamilyMembers] = useState<Relative[]>([])
    const [user, setUser] = useState<Recipient>()
    const [loading, setLoading] = useState(true)
    const userId = useUserStore(state => state.userId) 
    // useSubscription(SUBSCRIBE_TO_RELATIVES_BY_UID,
    //     {
    //         variables: { id: user?.id ?? '' },
    //         skip: user ? false : true,
    //         onSubscriptionData: ({ subscriptionData }) => {
    //             const relative = subscriptionData.data.RelativeReadModels as Relative
    //             if (relative.isDeleted) {
    //                 setFamilyMembers(familyMembers.filter(member => member.id !== relative.id))
    //             } else {
    //                 setFamilyMembers([...familyMembers.filter(member => member.id !== relative.id), relative])
    //             }

    //         }
    //     })
    useSubscription(SUBSCRIBE_TO_RECIPIENT_USER,
        {
            variables: { id: user?.id ?? '' },
            skip: user ? false : true,
            onSubscriptionData: ({ subscriptionData }) => {
                const recipient = subscriptionData.data.RecipientReadModel as Recipient
                setUser(recipient)
            }
        })

    useEffect(() => {
        if (userId) {
            RecipientUserService.getUserById(userId)
                .then(recipientUser => {
                    setUser(recipientUser)
                    RelativeService.getAllByRecipientUserId(recipientUser.id).then(relatives => {
                        setFamilyMembers(relatives ?? [])
                    })
                    setLoading(false)
                })
                .catch(e => {
                    console.log(e)
                    setLoading(false)
                })
        }
    }, [userId])

    const navigate = useNavigate()

    const disableNext = familyMembers.length === 0
    const handleNextWithFamilyMembers = () => {
        if (!disableNext) {
            navigate(AppRoute.REGISTER_REFERRAL_SHEET)
        }
    }

    return {
        familyMembers,
        loading,
        setFamilyMembers,
        handleNextWithFamilyMembers,
        disableNext
    }
}

export default useRegisterFamilyMembers
