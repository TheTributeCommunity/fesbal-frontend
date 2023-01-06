import AppBackButton from "../components/atom/AppBackButton";
import AppBurgerMenuButton from "../components/atom/AppBurgerMenuButton";
import {useParams} from "react-router-dom";
import AppWatchButton from "../components/atom/AppWatchButton";
import AppLocationButton from "../components/atom/AppLocationButton";
import AppBellButton from "../components/atom/AppBellButton";
import useNotification from "../hooks/useNotification";

const NotificationDetails = () => {
    const {id} = useParams();
    const {title, message, date} = useNotification(id as string);

    return (
        <div className="h-screen flex flex-col page-bg text-blue-dark p-8 justify-between">
            <div className="flex flex-col gap-8 self-center md:w-1/2 lg:w-1/3">
                <div className="flex flex-row justify-between items-center text-blue-light text-base font-bold">
                    <AppBackButton goTo="/notifications"/>
                    <h1>Notificaciones</h1>
                    <AppBurgerMenuButton/>
                </div>
                <div className="bg-white rounded-xl pt-5 pb-24 px-8 gap-4 flex flex-col">
                    <p className="text-blue-light text-sm">{date}</p>
                    <h2 className="text-l font-bold">{title}</h2>
                    <p className="text-blue-dark line-breaks">{message}</p>
                </div>
            </div>
            <nav
                className="flex flex-row justify-between items-center self-center w-full md:w-1/2 lg:w-1/3 bg-white rounded-xl p-4 sticky bottom-0">
                <AppWatchButton/>
                <AppLocationButton/>
                <AppBellButton/>
            </nav>
        </div>
    );
}

export default NotificationDetails;
