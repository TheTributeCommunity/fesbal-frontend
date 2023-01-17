import {useTranslation} from "react-i18next";
import AppBackButton from "../components/atom/AppBackButton";
import AppLinkButton from "../components/atom/AppLinkButton";
import LogoFesbalIcon from "../components/icons/LogoFesbalIcon";
import {namespaces} from "../i18n/i18n.constants";

const RegisterLegal = () => {
    const {t} = useTranslation(namespaces.pages.registerLegal);

    return (
        <div className="app-page">
            <div className="app-page__header">
                <AppBackButton goTo="/welcome"/>
            </div>
            <div className="app-logo">
                <LogoFesbalIcon/>
            </div>
            <div className="app-register-legal__container">
                <div>
                    <h1 className="mb-4 font-big-title">{t("title")}</h1>
                    <p className="font-text">{t("description")}</p>
                </div>
                <div>
                    <p className="font-label">{t("subtitle")}</p>
                    <a href="https://www.theagilemonkeys.com/" target="_blank">
                        <p className="underline text-primary-color font-small-link">{t("terms")}</p>
                    </a>
                </div>
                <AppLinkButton title={t("next")} link="/register/id"/>
            </div>
        </div>
    );
};

export default RegisterLegal;
