import AppBackButton from "../components/atom/AppBackButton";
import AppBurgerMenuButton from "../components/atom/AppBurgerMenuButton";
import NotificationItem from "../components/atom/NotificationItem";
import NotificationsMock from "../mocks/notifications.mock";
import AppWatchButton from "../components/atom/AppWatchButton";
import AppLocationButton from "../components/atom/AppLocationButton";
import AppBellButton from "../components/atom/AppBellButton";

const notifications = NotificationsMock.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
});

const NotificationsScreen = () => {
    return (
        <div className="h-screen flex flex-col page-bg text-blue-dark p-8 justify-between">
            <div className="flex flex-col gap-8 self-center md:w-1/2 lg:w-1/3">
                <div className="flex flex-row justify-between items-center text-blue-light text-base font-bold">
                    <AppBackButton goTo="/login"/>
                    <h1>Notificaciones</h1>
                    <AppBurgerMenuButton/>
                </div>
                <ul className="flex flex-col gap-4">
                    {notifications.map((notification, index) => (
                        <NotificationItem key={index} {...notification}/>
                    ))}
                </ul>
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

export default NotificationsScreen;