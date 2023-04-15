import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { namespaces } from '../i18n/i18n.constants'
import AppPopupAlert from '../components/atom/AppPopupAlert'
import { Recipient } from '../models/recipient-user'
import { RecipientUserService } from '../services/recipient-user-service'
import { Relative } from '../models/relative'
import { AppRoute } from '../enums/app-route'
import { UsersContext } from '../contexts/usersContext'
import { RelativeService, SUBSCRIBE_TO_RELATIVES_BY_UID } from '../services/relative-service'
import { useSubscription } from '@apollo/client'

const useRegisterFamilyMembers = () => {
    const { t: translate } = useTranslation(namespaces.pages.registerFamilyMembers)
    const [familyMembers, setFamilyMembers] = useState<Relative[]>([])
    const [user, setUser] = useState<Recipient>()
    const { firebaseUser } = useContext(UsersContext)
    useSubscription(SUBSCRIBE_TO_RELATIVES_BY_UID,
        {
            variables: { id: user?.id ?? '' },
            skip: user ? false : true,
            onSubscriptionData: ({ subscriptionData }) => {
                const relative = subscriptionData.data.RelativeReadModels as Relative
                familyMembers.every(member => member.id !== relative.id) && setFamilyMembers([...familyMembers, relative])
            }
        })

    useEffect(() => {
        if (firebaseUser) {
            RecipientUserService.getUserById(firebaseUser.uid)
                .then(recipientUser => {
                    setUser(recipientUser)
                    recipientUser.relativesIds &&
                        fetchRelatives(firebaseUser.uid)
                            .then(relatives => setFamilyMembers(relatives))
                })
                .catch(e => console.log(e))
        }
    }, [firebaseUser])

    const fetchRelatives = async (id: string): Promise<Relative[]> => {
        const relatives = await RelativeService.getAllByRecipientUserId(id)
            .catch(e => {
                console.log(e)
                return []
            })
        return relatives
    }

    const navigate = useNavigate()

    const disableNext = familyMembers.length === 0
    const handleNextWithFamilyMembers = () => {
        if (!disableNext) {
            navigate(AppRoute.REGISTER_REFERRAL_SHEET)
        }
    }

    return {
        user,
        familyMembers,
        setFamilyMembers,
        handleNextWithFamilyMembers,
        disableNext
    }
}

export default useRegisterFamilyMembers
