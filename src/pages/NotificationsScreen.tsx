import AppBackButton from "../components/atom/AppBackButton";
import AppBurgerMenuButton from "../components/atom/AppBurgerMenuButton";
import NotificationItem from "../components/atom/NotificationItem";
import NotificationsMock from "../mocks/notifications.mock";
import { useTranslation } from "react-i18next";
import { namespaces } from "../i18n/i18n.constants";
import BottomNavBar from "../components/molecules/BottomNavBar";

const notifications = NotificationsMock.sort((a, b) => {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
});

const NotificationsScreen = () => {
  const { t } = useTranslation(namespaces.pages.notifications);

  return (
    <div className="h-screen flex flex-col page-bg text-secondary-color p-8 justify-between">
      <div className="flex flex-col gap-8 self-center md:w-1/2 lg:w-1/3">
        <div className="flex flex-row justify-between items-center text-primary-color text-base font-bold">
          <AppBackButton goTo="/login" />
          <h1>{t("title")}</h1>
          <AppBurgerMenuButton />
        </div>
        <ul className="flex flex-col gap-4">
          {notifications.map((notification, index) => (
            <NotificationItem key={index} {...notification} />
          ))}
        </ul>
      </div>
      <BottomNavBar />
    </div>
  );
};

export default NotificationsScreen;
