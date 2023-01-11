import {useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";
import AppBackButton from "../components/atom/AppBackButton";
import AppBurgerMenuButton from "../components/atom/AppBurgerMenuButton";
import AppWatchButton from "../components/atom/AppWatchButton";
import AppLocationButton from "../components/atom/AppLocationButton";
import AppBellButton from "../components/atom/AppBellButton";
import useNotification from "../hooks/useNotification";
import {namespaces} from "../i18n/i18n.constants";

const NotificationDetails = () => {
    const {id} = useParams();
    const {title, message, date} = useNotification(id as string);
    const {t: translate} = useTranslation(namespaces.pages.notifications);

    return (
        <div className="flex h-screen flex-col justify-between p-8 page-bg text-secondary-color">
            <div className="flex flex-col gap-8 self-center md:w-1/2 lg:w-1/3">
                <div className="flex flex-row items-center justify-between">
                    <AppBackButton goTo="/notifications"/>
                    <h1 className="text-primary-color font-mini-title">{translate("title")}</h1>
                    <AppBurgerMenuButton/>
                </div>
                <div className="flex flex-col gap-4 rounded-xl bg-white px-8 pt-5 pb-24">
                    <p className="text-primary-color font-label">{date}</p>
                    <h2 className="text-l font-mini-title">{title}</h2>
                    <p className="whitespace-pre-line text-secondary-color font-text">{message}</p>
                </div>
            </div>
            <nav
                className="sticky bottom-0 flex w-full flex-row items-center justify-between self-center rounded-xl bg-white p-4 px-10 md:w-1/2 lg:w-1/3">
                <AppWatchButton/>
                <AppLocationButton/>
                <AppBellButton/>
            </nav>
        </div>
    );
}

export default NotificationDetails;
