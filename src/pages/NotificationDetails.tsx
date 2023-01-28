import {useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";
import useNotification from "../hooks/useNotification";
import {namespaces} from "../i18n/i18n.constants";
import AppWrapper from "../components/molecules/AppWrapper";

const NotificationDetails = () => {
    const {id} = useParams();
    const {title, message, date} = useNotification(id as string);
    const {t: translate} = useTranslation(namespaces.pages.notifications);

    return (
        <AppWrapper title={translate("title")} link="/notifications" showBurger>
            <div className="flex w-full flex-col justify-start gap-4 mb-2">
                <p className="text-primary-color font-label">{date}</p>
                <h2 className="font-mini-title">{title}</h2>
                <p className="whitespace-pre-line font-text">{message}</p>
            </div>
        </AppWrapper>
    );
}

export default NotificationDetails;
