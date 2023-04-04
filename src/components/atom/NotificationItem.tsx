import NotificationProps from '../../types/Notification'
import {FC} from 'react'
import {NavLink} from 'react-router-dom'

const NotificationItem: FC<NotificationProps> = ({id, title, message, date, hasBeenRead}) => {
    return (
        <>
            <NavLink className={`${hasBeenRead ? 'bg-tertiary-color' : 'bg-white'} rounded-xl py-5 px-8 flex flex-col gap-2`}
                to={`/notifications/${id}`}>
                <p className="text-primary-color font-label">{date}</p>
                <h2 className="font-mini-title">{title}</h2>
                <p className="font-text">{message.length > 80 ? message.substring(0, 80) + '...' : message}</p>
            </NavLink>
        </>
    )
}

export default NotificationItem
