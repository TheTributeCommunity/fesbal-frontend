import {useTranslation} from 'react-i18next'
import NotificationItem from '../components/atom/NotificationItem'
import {namespaces} from '../i18n/i18n.constants'
import AppWrapper from '../components/molecules/AppWrapper'
import { useContext } from 'react'
import { UsersContext } from '../contexts/usersContext'
import Spinner from '../components/atom/Spinner'

const NotificationsScreen = () => {
    const {t: translate} = useTranslation(namespaces.pages.notifications)
    const { firebaseUser, loggedUserType, notifications } = useContext(UsersContext)

    return (
        <AppWrapper showBackButton title={translate('title')} showBurger>
            {!firebaseUser ? <Spinner /> : <ul className="flex w-full flex-col justify-start gap-4 mb-2">
                {!notifications?.length ? <p className="text-secondary-color text-center text-base pt-4">No hay notificaciones</p> : notifications.map((notification, index) => (
                    <NotificationItem key={index} mode={loggedUserType} {...notification}/>
                ))}
            </ul>}
        </AppWrapper>
    )
}

export default NotificationsScreen
