import {useTranslation} from "react-i18next";
import AppBackButton from "../components/atom/AppBackButton";
import AppLinkButton from "../components/atom/AppLinkButton";
import LogoFesbalIcon from "../components/icons/LogoFesbalIcon";
import {namespaces} from "../i18n/i18n.constants";

const RegisterLegal = () => {
    const {t: translate} = useTranslation(namespaces.pages.registerLegal);

    return (
        <div className="app-page">
            <div className="app-page__header">
                <AppBackButton link="/welcome"/>
            </div>
            <div className="app-logo">
                <LogoFesbalIcon/>
            </div>
            <div className="app-register-legal__container p-8">
                <div>
                    <h1 className="mb-4 font-big-title">{translate("title")}</h1>
                    <p className="font-text">{translate("description")}</p>
                </div>
                <div>
                    <p className="font-label">{translate("subtitle")}</p>
                    <a href="https://www.theagilemonkeys.com/" target="_blank">
                        <p className="underline text-primary-color font-small-link">{translate("terms")}</p>
                    </a>
                </div>
                <AppLinkButton title={translate("next")} link="/register/name"/>
            </div>
        </div>
    );
};

export default RegisterLegal;
