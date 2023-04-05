import {useTranslation} from 'react-i18next'
import {namespaces} from '../i18n/i18n.constants'
import PageHeader from '../components/molecules/AppPageHeader'
import LoginList from '../components/molecules/LoginList'
import { UsersContext } from '../contexts/usersContext'
import { useContext, useEffect } from 'react'
import { UserType } from '../enums/UserType'
import { useNavigate } from 'react-router-dom'
import { AppRoute } from '../enums/app-route'

const Welcome = () => {
    const {t: translate} = useTranslation(namespaces.pages.welcomeScreen)
    const {loggedUserType, firebaseUser} = useContext(UsersContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (loggedUserType && firebaseUser) {
            if (loggedUserType === UserType.RECIPIENT) navigate(AppRoute.RECIPIENT_HOME)
            else navigate(AppRoute.ENTITY_HOME)
        }
    }, [loggedUserType, firebaseUser])

    return (
        <div className="bg-page">
            <div className="flex flex-row w-full fixed md:w-1/2 lg:w-1/3 px-8 pt-4 pb-4 top-0 left-0 right-0 mx-auto justify-center">
                <span
                    className="font-roboto-flex font-bold text-xl leading-6 text-dark-blue">FESBAL</span>
            </div>
            <PageHeader/>
            <LoginList/>
        </div>
    )
}

export default Welcome
