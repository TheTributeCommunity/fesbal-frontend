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
import { Recipient } from '../models/recipient-user'
import { RecipientUserService } from '../services/recipient-user-service'
import PersonalDataItemProps from '../types/PersonalDataItemProps'

const RegisterRequestSent = () => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState<Recipient>()
    const { firebaseUser } = useContext(UsersContext)
    const {t: translate} = useTranslation(namespaces.pages.registerRequestSent)

    useEffect(() => {
        if (firebaseUser?.uid) RecipientUserService.getUserById(firebaseUser.uid).then(user => {
            setUser(user)
            setLoading(false)
        })
    }, [firebaseUser])

    const getFamilyMembers = (): string[] => {
        return user?.relativesIds ?? []
    }

    const getPersonalData = (): PersonalDataItemProps[] => {
        if (user)
            return [
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
                    value: getFamilyMembers()?.length.toString() || '0',
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
            <div className="app-shadow mx-auto w-full md:w-1/2 lg:w-1/3 px-5 pt-6 pb-4 text-center bg-white rounded-xl text-secondary-color z-10">
                <RequestSentIcon/>
                <div className="flex flex-col mt-4 gap-2">
                    <h1 className="mb-4 text-2xl font-bold font-roboto-flex">{translate('title')}</h1>
                    <div className="text-left">
                        <p className="font-label text-primary-color">{translate('fullName')}</p>
                        <p className={'font-text text-ellipsis overflow-hidden font-bold'}>{user ? user.firstName + ' ' + user.lastName : ''}</p>
                    </div>
                    <div className="w-full border-solid border-[1px] border-[#F2FBFF]"></div>
                    <ul className="grid grid-cols-2 gap-x-8 gap-y-4 pb-4 text-left justify-between">
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
