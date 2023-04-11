import { useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import AppLinkButton from '../components/atom/AppLinkButton'
import BlankStage from '../components/atom/BlankStage'
import RegisterPersonalDataItem from '../components/atom/RegisterPersonalDataItem'
import Spinner from '../components/atom/Spinner'
import LogoFesbalWhiteIcon from '../components/icons/LogoFesbalWhiteIcon'
import RequestSentIcon from '../components/icons/RequestSentIcon'
import { UsersContext } from '../contexts/usersContext'
import { AppRoute } from '../enums/app-route'
import { namespaces } from '../i18n/i18n.constants'
import { default as users, default as UsersMock } from '../mocks/users.mock'
import { RecipientUser } from '../models/recipient-user'
import { RecipientUserService } from '../services/recipient-user-service'
import PersonalDataItemProps from '../types/PersonalDataItemProps'

const RegisterRequestSent = () => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState<RecipientUser>()
    const { firebaseUser } = useContext(UsersContext)
    const {t: translate} = useTranslation(namespaces.pages.registerRequestSent)

    useEffect(() => {
        if (firebaseUser?.uid) RecipientUserService.getUserById(firebaseUser.uid).then(user => {
            setUser(user)
            setLoading(false)
        })
    }, [firebaseUser])

    const getFamilyMembers = (id: string) => {
        const user = users.find(user => user.id === id)
        return user?.familyMembers
    }
    const getPersonalData = (): PersonalDataItemProps[] => {
        if (user)
            return [
                {
                    title: translate('fullName'),
                    value: user.firstName + ' ' + user.lastName,
                    span: 2,
                },
                {
                    title: translate('id'),
                    value: user.identityDocumentNumber,
                    span: 1
                },
                {
                    title: translate('birthDate'),
                    value: user.dateOfBirth,
                    span: 1
                },
                {
                    title: translate('email'),
                    value: user.email,
                    span: 1
                },
                {
                    title: translate('phone'),
                    value: user.phone,
                    span: 1
                },
                {
                    title: 'Miembros unidad familiar',
                    value: getFamilyMembers(user.id)?.length.toString() || '0',
                    span: 2
                }
            ]
        else return []
    }

    if (loading) return (
        <BlankStage >
            <Spinner />
        </BlankStage>
    )

    return (
        <div className="min-h-screen flex flex-col justify-between bg-primary-color px-4 pb-4">
            <div className="pb-8 pt-14">
                <LogoFesbalWhiteIcon/>
            </div>
            <div className="app-shadow mx-auto w-full md:w-1/2 lg:w-1/3 px-8 pt-6 pb-4 text-center bg-white rounded-xl text-secondary-color z-10">
                <RequestSentIcon/>
                <div className="flex flex-col mt-4">
                    <h1 className="mb-4 font-big-title font-roboto-flex">{translate('title')}</h1>
                    <ul className="grid grid-cols-2 gap-x-3 gap-y-4 pb-2 text-left justify-between">
                        {getPersonalData().map((item, index) => (
                            <RegisterPersonalDataItem title={item.title} value={item.value} span={item.span} key={index} className={item.className}/>
                        ))}
                    </ul>
                </div>
                <AppLinkButton title={translate('next')} link={AppRoute.RECIPIENT_HOME}/>
            </div>
        </div>
    )
}

export default RegisterRequestSent
