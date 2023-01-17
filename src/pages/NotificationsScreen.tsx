import {useTranslation} from "react-i18next";
import AppBackButton from "../components/atom/AppBackButton";
import AppBellButton from "../components/atom/AppBellButton";
import AppBurgerMenuButton from "../components/atom/AppBurgerMenuButton";
import AppLocationButton from "../components/atom/AppLocationButton";
import AppWatchButton from "../components/atom/AppWatchButton";
import NotificationItem from "../components/atom/NotificationItem";
import NotificationsMock from "../mocks/notifications.mock";
import {namespaces} from "../i18n/i18n.constants";


const notifications = NotificationsMock.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
});

const NotificationsScreen = () => {
    const {t: translate} = useTranslation(namespaces.pages.notifications);

    return (
        <div className="app-page">
            <div className="app-page__header">
                <div className="flex flex-row items-center justify-between">
                    <AppBackButton goTo="/login"/>
                    <h1 className="text-primary-color font-mini-title">{translate("title")}</h1>
                    <AppBurgerMenuButton/>
                </div>
                <ul className="flex flex-col gap-4">
                    {notifications.map((notification, index) => (
                        <NotificationItem key={index} {...notification}/>
                    ))}
                </ul>
            </div>
            <nav className="app-bottom-nav">
                <AppWatchButton/>
                <AppLocationButton/>
                <AppBellButton/>
            </nav>
        </div>
    );
}

export default NotificationsScreen;
