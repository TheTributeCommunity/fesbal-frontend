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
        <div className="app-page">
            <div className="app-page__header">
                <div className="flex flex-row items-center justify-between">
                    <AppBackButton goTo="/notifications"/>
                    <h1 className="text-primary-color font-mini-title">{translate("title")}</h1>
                    <AppBurgerMenuButton/>
                </div>
                <div className="flex flex-col gap-4 rounded-xl bg-white px-8 pt-5 pb-24">
                    <p className="text-primary-color font-label">{date}</p>
                    <h2 className="font-mini-title">{title}</h2>
                    <p className="whitespace-pre-line font-text">{message}</p>
                </div>
            </div>
            <nav className="app-bottom-nav">
                <AppWatchButton/>
                <AppLocationButton/>
                <AppBellButton/>
            </nav>
        </div>
    );
}

export default NotificationDetails;
