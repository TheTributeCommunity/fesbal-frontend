import { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { UsersContext } from '../contexts/usersContext'
import Notification from '../types/Notification'


const useNotification = () => {
    const location = useLocation()
    const [notification, setNotification] = useState<Notification>()
    const { notifications } = useContext(UsersContext)

    useEffect(() => {
        const notificationId = location.state.id as string
        const found = (notifications ?? []).find(notification => notification.id === notificationId)

        found && setNotification(found)
        // TODO: set notification to read
    }, [])

    return {
        title: notification?.title ?? '',
        body: notification?.body ?? '',
        date: notification?.dateCreated ?? new Date(),
    }
}

export default useNotification
