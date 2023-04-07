import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { namespaces } from '../i18n/i18n.constants'
import AppPopupAlert from '../components/atom/AppPopupAlert'
import { RecipientUser } from '../models/recipient-user'
import { RecipientUserService } from '../services/recipient-user-service'
import { Relative } from '../models/relative'
import { AppRoute } from '../enums/app-route'
import { UsersContext } from '../contexts/usersContext'

const useRegisterFamilyMembers = () => {
    const { t: translate } = useTranslation(namespaces.pages.registerFamilyMembers)
    const [familyMembers, setFamilyMembers] = useState<Relative[]>([])
    const [user, setUser] = useState<RecipientUser>()
    const { firebaseUser } = useContext(UsersContext)

    useEffect(() => {
        if (firebaseUser) {
            RecipientUserService.getUserById(firebaseUser.uid).then((recipientUser) => {
                setUser(recipientUser)
                recipientUser.relatives && setFamilyMembers(recipientUser.relatives)
            })
        }

    }, [firebaseUser])

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
