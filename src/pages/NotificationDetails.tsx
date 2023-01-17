import {useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";
import useNotification from "../hooks/useNotification";
import {namespaces} from "../i18n/i18n.constants";
import AppBottomNav from "../components/molecules/AppBottomNav";
import AppPageBurgerHeader from "../components/molecules/AppPageBurgerHeader";

const NotificationDetails = () => {
    const {id} = useParams();
    const {title, message, date} = useNotification(id as string);
    const {t: translate} = useTranslation(namespaces.pages.notifications);

    return (
        <div className="app-page h-screen">
            <AppPageBurgerHeader title={translate("title")} link="/notifications"/>
            <div className="app-page__container mb-16 mt-8">
                <p className="text-primary-color font-label">{date}</p>
                <h2 className="font-mini-title">{title}</h2>
                <p className="whitespace-pre-line font-text">{message}</p>
            </div>
            <AppBottomNav/>
        </div>
    );
}

export default NotificationDetails;
