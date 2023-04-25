import {useTranslation} from 'react-i18next'
import NotificationItem from '../components/atom/NotificationItem'
import NotificationsMock from '../mocks/notifications.mock'
import {namespaces} from '../i18n/i18n.constants'
import AppWrapper from '../components/molecules/AppWrapper'
import Notification from '../types/Notification'
import { useContext, useState } from 'react'
import { UsersContext } from '../contexts/usersContext'

const notifications = NotificationsMock.sort((a, b) => {
    return new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime()
})

interface NotificationsScreenProps {
    mode?: string
}

const NotificationsScreen = ({mode = 'recipient'}: NotificationsScreenProps) => {
    const {t: translate} = useTranslation(namespaces.pages.notifications)
    const [notifications, setNotifications] = useState<Notification[]>([])
    const { firebaseUser } = useContext(UsersContext)

    useEffect(() => {

    }, [])

    return (
        <AppWrapper showBackButton title={translate('title')} showBurger>
            <ul className="flex w-full flex-col justify-start gap-4 mb-2">
                {notifications.map((notification, index) => (
                    <NotificationItem key={index} mode={mode} {...notification}/>
                ))}
            </ul>
        </AppWrapper>
    )
}

export default NotificationsScreen
