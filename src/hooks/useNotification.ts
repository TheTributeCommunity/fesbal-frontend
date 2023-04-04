import { useEffect } from 'react'
import NotificationProps from '../types/Notification'
import notificationsMock from '../mocks/notifications.mock'

const useNotification = (id: string) => {
    const notification: NotificationProps | undefined = notificationsMock.find((notification) => notification.id === id)
    const { title, message, date } = notification || {}

    useEffect(() => {
        notificationsMock.map((notification) => {
            if (notification.id === id) {
                notification.hasBeenRead = true
            }
        })
    })

    return { title, message, date }
}

export default useNotification
