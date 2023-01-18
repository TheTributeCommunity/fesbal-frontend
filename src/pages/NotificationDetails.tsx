import AppBackButton from "../components/atom/AppBackButton";
import AppBurgerMenuButton from "../components/atom/AppBurgerMenuButton";
import { useParams } from "react-router-dom";
import useNotification from "../hooks/useNotification";
import { useTranslation } from "react-i18next";
import { namespaces } from "../i18n/i18n.constants";
import BottomNavBar from "../components/molecules/BottomNavBar";

const NotificationDetails = () => {
    const { id } = useParams();
    const { title, message, date } = useNotification(id as string);
    const { t } = useTranslation(namespaces.pages.notifications);

    return (
        <div className="h-screen flex flex-col page-bg text-secondary-color p-8 justify-between">
            <div className="flex flex-col gap-8 self-center md:w-1/2 lg:w-1/3">
                <div className="flex flex-row justify-between items-center text-primary-color text-base font-bold">
                    <AppBackButton goTo="/notifications" />
                    <h1>{t("title")}</h1>
                    <AppBurgerMenuButton />
                </div>
                <div className="bg-white rounded-xl pt-5 pb-24 px-8 gap-4 flex flex-col">
                    <p className="text-primary-color text-sm">{date}</p>
                    <h2 className="text-l font-bold">{title}</h2>
                    <p className="text-secondary-color line-breaks">{message}</p>
                </div>
            </div>
            <BottomNavBar />
        </div>
    );
};

export default NotificationDetails;
