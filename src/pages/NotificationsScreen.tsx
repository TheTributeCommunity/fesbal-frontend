import {useTranslation} from "react-i18next";
import NotificationItem from "../components/atom/NotificationItem";
import NotificationsMock from "../mocks/notifications.mock";
import {namespaces} from "../i18n/i18n.constants";
import AppWrapper from "../components/molecules/AppWrapper";

const notifications = NotificationsMock.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
});

const NotificationsScreen = () => {
    const {t: translate} = useTranslation(namespaces.pages.notifications);

    return (
        <AppWrapper link="/login" title={translate("title")} showBurger>
                <ul className="flex w-full flex-col self-center justify-start gap-4 mb-2">
                    {notifications.map((notification, index) => (
                        <NotificationItem key={index} {...notification} />
                    ))}
                </ul>
        </AppWrapper>
    );
};

export default NotificationsScreen;
