import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { namespaces } from '../i18n/i18n.constants'
import AppPopupAlert from '../components/atom/AppPopupAlert'
import { RecipientUser } from '../models/recipient-user'
import { RecipientUserService, SUBSCRIBE_TO_RECIPIENT_USER } from '../services/recipient-user-service'
import { Relative } from '../models/relative'
import { AppRoute } from '../enums/app-route'
import { UsersContext } from '../contexts/usersContext'
import { RelativeService } from '../services/relative-service'
import { useSubscription } from '@apollo/client'

const useRegisterFamilyMembers = () => {
    const { t: translate } = useTranslation(namespaces.pages.registerFamilyMembers)
    const [familyMembers, setFamilyMembers] = useState<Relative[]>([])
    const [user, setUser] = useState<RecipientUser>()
    const { firebaseUser } = useContext(UsersContext)
    useSubscription(SUBSCRIBE_TO_RECIPIENT_USER,
        {
            variables: { id: user?.id ?? '' },
            skip: user ? false : true,
            onSubscriptionData: () => fetchRelatives(user?.id ?? '').then(relatives => setFamilyMembers(relatives))
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

    const handleWithoutFamilyMembers = () => {
        AppPopupAlert({
            icon: 'warning',
            title: translate('sweetAlert.title') as string,
            text: translate('sweetAlert.text') as string,
            confirmButtonText: translate('sweetAlert.confirmButtonText') as string,
            cancelButtonText: translate('sweetAlert.cancelButtonText') as string,
        }).fire().then((result) => {
            if (result.isConfirmed) {
                navigate(AppRoute.REGISTER_REFERRAL_SHEET)
            }
        })
    }

    return {
        user,
        familyMembers,
        setFamilyMembers,
        handleNextWithFamilyMembers,
        handleWithoutFamilyMembers,
        disableNext
    }
}

export default useRegisterFamilyMembers
