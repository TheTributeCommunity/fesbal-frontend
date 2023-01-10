import NotificationProps from "../../types/NotificationProps";
import {FC} from "react";
import {NavLink} from "react-router-dom";

const NotificationItem: FC<NotificationProps> = ({id, title, message, date, hasBeenRead}) => {
    return (
        <>
            <NavLink className={`${hasBeenRead ? "bg-[#F2FBFF]" : "bg-white"} rounded-xl py-5 px-8`}
                     to={`/notifications/${id}`}>
                <p className="text-primary-color text-sm">{date}</p>
                <h2 className="text-l font-bold">{title}</h2>
                <p className="text-secondary-color">{message.length > 80 ? message.substring(0, 80) + "..." : message}</p>
            </NavLink>
        </>
    );
};

export default NotificationItem;
