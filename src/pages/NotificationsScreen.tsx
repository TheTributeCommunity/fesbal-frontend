import {useTranslation} from "react-i18next";
import AppBackButton from "../components/atom/AppBackButton";
import AppBurgerMenuButton from "../components/atom/AppBurgerMenuButton";
import NotificationItem from "../components/atom/NotificationItem";
import NotificationsMock from "../mocks/notifications.mock";
import {namespaces} from "../i18n/i18n.constants";
import AppBottomNav from "../components/molecules/AppBottomNav";
import AppPageBurgerHeader from "../components/molecules/AppPageBurgerHeader";


const notifications = NotificationsMock.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
});

const NotificationsScreen = () => {
    const {t: translate} = useTranslation(namespaces.pages.notifications);

    return (
        <div className="app-page">
            <AppPageBurgerHeader title={translate("title")} link="/login"/>
                <ul className="app-page__container gap-4 mb-2">
                    {notifications.map((notification, index) => (
                        <NotificationItem key={index} {...notification}/>
                    ))}
                </ul>
            <AppBottomNav/>
        </div>
    );
}

export default NotificationsScreen;
