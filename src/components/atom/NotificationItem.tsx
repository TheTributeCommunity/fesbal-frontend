import Notification from '../../types/Notification'
import {FC} from 'react'
import {NavLink} from 'react-router-dom'
import { AppRoute } from '../../enums/app-route'

interface NotificationItemProps extends Notification {
    mode?: string
}

const NotificationItem: FC<NotificationItemProps> = ({id, title, body: message, dateCreated: date, read: hasBeenRead, mode = 'recipient'}) => {

    const getPath = () => mode === 'recipient' ? AppRoute.NOTIFICATIONS : AppRoute.ENTITY_NOTIFICATIONS

    return (
        <>
            <NavLink className={`${hasBeenRead ? 'bg-tertiary-color' : 'bg-white'} rounded-xl py-5 px-8 flex flex-col gap-2`}
                to={`${getPath()}/${id}`}>
                <p className="text-primary-color font-label">{date}</p>
                <h2 className="font-mini-title">{title}</h2>
                <p className="font-text">{message.length > 80 ? message.substring(0, 80) + '...' : message}</p>
            </NavLink>
        </>
    )
}

export default NotificationItem
